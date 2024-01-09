import { createBrowserRouter } from "react-router-dom";
import {
  EWLogin,
  EWWelcome,
  EWVerification,
  EWSignUp,
  EWHome,
} from "../pages/";
import { HomeLayout } from "../Layout";

export const router = createBrowserRouter([
  {
    name: "login",
    path: "/login",
    element: <EWLogin />,
    children: false,
  },
  {
    name: "signUp",
    path: "/sign-up",
    element: <EWSignUp />,
    children: false,
  },
  {
    name: "Verification",
    path: "/verification",
    element: <EWVerification />,
    children: false,
  },
  {
    name: "welcomeScreem",
    path: "/welcome",
    element: <EWWelcome />,
    children: false,
  },
  {
    name: "HomeLayout",
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        name: "Home",
        path: "/",
        element: <EWHome />,
      },
      {
        name: "referral",
        path: "/referral",
        // element: <EWLogin />,
        children: false,
      },
      {
        name: "wallet",
        path: "/wallet",
        // element: <EWLogin />,
        children: false,
      },
      {
        name: "Profile",
        path: "/profile",
        // element: <EWLogin />,
        children: false,
      },
    ],
  },
]);
