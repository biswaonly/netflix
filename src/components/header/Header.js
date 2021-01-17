import { useState } from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo
} from "./styles";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
};

Header.Frame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
);

Header.Logo = ({ to, ...restProps }) => (
  <ReachRouterLink to={to}>
    <Logo {...restProps} />
  </ReachRouterLink>
);

Header.Search = ({ searchTerm, setSearchTerm, ...restProps }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive(searchActive => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Profile = ({ children, ...restProps }) => (
  <Profile {...restProps}>{children}</Profile>
);

Header.Feature = ({ children, ...restProps }) => <Feature>{children}</Feature>;

Header.Picture = ({ src, ...restProps }) => (
  <Picture {...restProps} src={`/images/users/${src}.png`} />
);

Header.Dropdown = ({ children, ...restProps }) => (
  <Dropdown {...restProps}>{children}</Dropdown>
);

Header.TextLink = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);

Header.PlayButton = ({ children, ...restProps }) => (
  <PlayButton {...restProps}>{children}</PlayButton>
);

Header.FeatureCallOut = ({ children, ...restProps }) => (
  <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
);

Header.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Header.ButtonLink = ({ children, ...restProps }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

export default Header;
