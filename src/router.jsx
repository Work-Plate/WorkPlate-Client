import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Splash } from "@pages/splash/Splash";
import { Main } from "@pages/main/Main";

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
    ],
  },
]);

export default router;
