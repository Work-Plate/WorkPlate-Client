import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import theme from "@styles/theme";
import { GlobalStyle } from "@styles/style";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
