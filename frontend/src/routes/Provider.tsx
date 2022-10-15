import {
  RouterProvider as RRDRouterProvider,
  RouterProviderProps as RRDRouterProviderProps,
} from "react-router-dom";
import { router } from "./router";

interface RouterProviderProps extends Omit<RRDRouterProviderProps, "router"> {}

export function RouterProvider({ ...props }: RouterProviderProps) {
  return <RRDRouterProvider router={router} {...props} />;
}
