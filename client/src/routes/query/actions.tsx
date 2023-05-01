export const createRouteConfig = (props: EndPointConfig): RouteConfig => {
  const base = "http://localhost:8000/api";
  const endpoint = base + props.endpoint;

  return {
    base,
    ...props,
    endpoint,
  };
};
