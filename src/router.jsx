import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Splash } from "@pages/splash/Splash";
import { Main } from "@pages/main/Main";
import { WorkMainPage } from "@pages/workMainPage/WorkMainPage";
import FoodMainPage from "@pages/foodMainPage/FoodMainPage";
import ChatBotPage from "@pages/chatBotPage/ChatBotPage";
import { OnBoarding } from "@pages/onBoarding/OnBoarding";
import { Intro } from "@pages/intro/Intro";
import { OnBoarding2 } from "@pages/onBoarding/OnBoarding2";
import { OnBoarding3 } from "@pages/onBoarding/OnBoarding3";

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
        path: "/onboarding/1",
        element: <OnBoarding />,
      },
      {
        path: "/onboarding/2",
        element: <OnBoarding2 />,
      },
      {
        path: "/onboarding/3",
        element: <OnBoarding3 />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
    ],
  },
]);

export default router;
