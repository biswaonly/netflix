import { Container, Frame, Title, Item, Inner, Header, Body } from './styles';

const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

Accordion.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Frame = ({ children, ...restProps }) => (
  <Frame {...restProps}>{children}</Frame>
);

Accordion.Item = ({ children, ...restProps }) => (
  <Item {...restProps}>{children}</Item>
);

Accordion.Header = ({ children, ...restProps }) => (
  <Header {...restProps}>
    {children}
    {restProps.active ? (
      <img src="/images/icons/close-slim.png" alt="Close" />
    ) : (
      <img src="/images/icons/add.png" alt="Open" />
    )}
  </Header>
);

Accordion.Body = ({ children, ...restProps }) => (
  <Body {...restProps}>
    <span>{children}</span>
  </Body>
);

export default Accordion;
