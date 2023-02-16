type RouteConfig<R = any> = {
  base: "http://localhost:8000/api";
  path: string;
  payload: R;
};
