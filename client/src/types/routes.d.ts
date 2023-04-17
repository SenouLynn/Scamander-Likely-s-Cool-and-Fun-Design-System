type RouteConfig<R = any> = {
  base: "http://localhost:8000/api";
  endpoint: string;
  method: "post" | "get";
  payload: R;
};

type EndPointConfig = {
  endpoint: string;
  method: "post" | "get";
  payload: any | null;
};
