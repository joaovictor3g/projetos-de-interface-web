import { App } from "@/App";
import { Feed } from "@/pages/Feed";
import { createBrowserRouter, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <span style={{ color: "white" }}>Error</span>,
    children: [
      {
        index: true,
        path: "/",
        element: <Feed />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
