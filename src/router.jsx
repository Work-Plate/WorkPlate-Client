import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Splash } from "@pages/splash/Splash";
import { Main } from "@pages/main/Main";
import { WorkMainPage } from "@pages/workMainPage/WorkMainPage";
import FoodMainPage from "@pages/foodMainPage/FoodMainPage";
import ChatBotPage from "@pages/chatBotPage/ChatBotPage";
import { Intro } from "@pages/intro/Intro";
import { OnBoarding0 } from "@pages/onBoarding/OnBoarding0";
import { OnBoarding1 } from "@pages/onBoarding/OnBoarding1";
import { OnBoarding2 } from "@pages/onBoarding/OnBoarding2";
import { OnBoarding3 } from "@pages/onBoarding/OnBoarding3";
import { OnBoarding4 } from "@pages/onBoarding/OnBoarding4";

import { QR } from "@pages/qr/QR";

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
        path: "/onboarding/0",
        element: <OnBoarding0 />,
      },
      {
        path: "/onboarding/1",
        element: <OnBoarding1 />,
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
        path: "/onboarding/4",
        element: <OnBoarding4 />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
      {
        path: "/qr",
        element: <QR />,
      },
    ],
  },
]);

export default router;
