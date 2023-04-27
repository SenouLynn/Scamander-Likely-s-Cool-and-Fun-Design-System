import { createPageRoute } from "./utils/createRoute";
import Poopdeck from "pages/poopdeck_2.0/Poopdeck";
import Bilgedeck from "pages/bilgedeck/Bilgedeck";
export const localRoutes: ReactRoute[] = [
  //All subroutes handled as subpage
  createPageRoute({
    path: "/poopdeck",
    Component: Poopdeck,
  }),
  createPageRoute({
    path: "/bilgedeck",
    Component: Bilgedeck,
  }),
  createPageRoute({ path: "/:page" }),
  //Keep this hardcoded as home
  createPageRoute(),
];
