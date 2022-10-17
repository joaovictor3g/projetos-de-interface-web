import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
