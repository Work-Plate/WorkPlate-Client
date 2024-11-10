import PropTypes from "prop-types";
import { LayoutContainer, Content } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
