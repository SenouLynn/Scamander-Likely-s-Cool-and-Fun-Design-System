import Poopdeck from "pages/poopdeck_2.0/Poopdeck";
import { createPageRoute } from "./utils/createRoute";

export const localRoutes: ReactRoute[] = [
  //All subroutes handled as subpage
  createPageRoute({
    path: "/poopdeck",
    Component: Poopdeck,
  }),
  createPageRoute({ path: "/:page" }),
  //Keep this hardcoded as home
  createPageRoute(),
];
