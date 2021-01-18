import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import signInData from "../fixtures/signin.json";

const SignIn = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [formData, setFormData] = useState({ emailAddress: "", password: "" });
  const [error, setError] = useState("");

  const { emailAddress, password } = formData;

  const isInvalid = password === "" || emailAddress === "";

  const handleForm = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = e => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(error => {
        setFormData({ emailAddress: "", password: "" });
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            {signInData.map(item => (
              <Form.Input
                key={item.name}
                placeholder={item.placeholder}
                value={formData[item.name]}
                type={item.type}
                name={item.name}
                onChange={e => handleForm(e)}
              />
            ))}
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
