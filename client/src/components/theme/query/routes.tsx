
export const createRouteConfig = (
  props: AtLeast<RouteConfig, "path">
): RouteConfig => {
  return {
    base: "http://localhost:8000/api",
    payload: {},
    ...props,
  };
};
export const routes: searchable = {
  getAll: createRouteConfig({ path: "getAll" }),
};