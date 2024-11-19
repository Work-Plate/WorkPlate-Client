import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Splash } from "@pages/splash/Splash";
import { Main } from "@pages/main/Main";
import { WorkMainPage } from "@pages/workMainPage/WorkMainPage";
import FoodMainPage from "@pages/foodMainPage/FoodMainPage";
import ChatBotPage from "@pages/chatBotPage/ChatBotPage";
import { OnBoarding } from "@pages/onBoarding/OnBoarding";

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
      {
        path: "/work",
        element: <WorkMainPage />,
      },
      {
        path: "/onboarding/:pageNumber",
        element: <OnBoarding />,
      },
    ],
  },
]);

export default router;
