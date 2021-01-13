import { useState } from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faq';

const FaqsContainer = () => {
  const [toggleShow, setToggleShow] = useState(0);

  const onClick = id => {
    toggleShow === id ? setToggleShow(0) : setToggleShow(id);
  };

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map(item => (
          <Accordion.Item key={item.id} toggleShow={toggleShow}>
            <Accordion.Header
              onClick={() => onClick(item.id)}
              active={toggleShow === item.id}
            >
              {item.header}
            </Accordion.Header>
            {toggleShow === item.id && (
              <Accordion.Body>{item.body}</Accordion.Body>
            )}
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
