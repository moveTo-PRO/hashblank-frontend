import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Feeds from "./pages/Feeds.tsx";
import Notifications from "./pages/Notifications.tsx";
import Profile from "./pages/Profile.tsx";
import Contribution from "./pages/Contribution.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Error from "./pages/Error.tsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Feeds />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
        {
        path: "/contribution",
        element: <Contribution />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);
