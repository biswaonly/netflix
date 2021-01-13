import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);

Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Jumbotron.Image = ({ ...restProps }) => <Image {...restProps} />;

export default Jumbotron;
