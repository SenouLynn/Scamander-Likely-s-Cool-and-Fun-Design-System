import path from "path";
export const createRoute = (props: string): string => {
  const config = routes[props];
  console.log([config.base, props].join("/"));
  if (config) {
    return [config.base, props].join("/");
  }
  throw new Error(`Trying to access ${props}, it doesn't seem to exist`);
};
const createRouteConfig = (
  props: AtLeast<RouteConfig, "path">
): RouteConfig => {
  return {
    base: "http://localhost:8000/api",
    payload: {},
    ...props,
  };
};
type RouteConfig<R = any> = {
  base: "http://localhost:8000/api";
  path: string;
  payload: R;
};
export const routes: searchable = {
  getDefaultStyle: createRouteConfig({ path: "getDefaultStyles" }),
  getComponentStyle: createRouteConfig({ path: "getComponentStyle" }),
};
export const routes_setters = {
  setDefaultStyle: {
    path: "getDefaultStyles",
  },
  getComponents: {
    path: "getComponents",
  },
};
