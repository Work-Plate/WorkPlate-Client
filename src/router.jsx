import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Splash } from "@pages/splash/Splash";
import { Main } from "@pages/main/Main";
import FoodMainPage from "@pages/foodMainPage/FoodMainPage";
import ChatBotPage from "@pages/chatBotPage/ChatBotPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Splash />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/food",
        element: <FoodMainPage />,
      },
      {
        path: "/chatbot",
        element: <ChatBotPage />,
      },
    ],
  },
]);

export default router;
