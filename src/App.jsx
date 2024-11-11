import { BrowserRouter } from "react-router-dom";
import ChatBotPage from "./pages/chatBotPage/ChatBotPage";
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import FoodMainPage from "./pages/foodMainPage/FoodMainPage";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <FoodMainPage />
      </BrowserRouter>
    </>
  );
}

export default App;
