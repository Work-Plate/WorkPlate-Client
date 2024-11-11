import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
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
      <Layout />
    </>
  );
}

export default App;
