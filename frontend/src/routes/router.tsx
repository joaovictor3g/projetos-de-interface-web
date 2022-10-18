import { App } from "@/App";
import { NotFound } from "@/pages/404";
import { Feed } from "@/pages/Feed";
import { Home } from "@/pages/Home";
import { UserRegistration } from "@/pages/UserRegistration";
import { createBrowserRouter, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <span style={{ color: "white" }}>Error</span>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/user-registration",
        element: <UserRegistration />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
