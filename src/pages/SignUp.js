import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import signupData from "../fixtures/signup.json";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [formData, setFormData] = useState({
    firstName: "",
    emailAddress: "",
    password: ""
  });
  const [error, setError] = useState("");

  const { firstName, emailAddress, password } = formData;

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleForm = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = e => {
    e.preventDefault();
    console.log(firstName, emailAddress, password);
    

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch(error => {
        setFormData({ firstName: "", emailAddress: "", password: "" });
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            {signupData.map(item => (
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
              data-testid="sign-up"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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

export default SignUp;
