import { NotFound } from "@/pages/404";
import { Feed } from "@/pages/Feed";
import { Home } from "@/pages/Home";
import { createBrowserRouter, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
