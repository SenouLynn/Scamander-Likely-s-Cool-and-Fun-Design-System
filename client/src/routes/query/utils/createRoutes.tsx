export const createRoute = (
  props: AtLeast<EndPointConfig, "endpoint">
): EndPointConfig => {
  return {
    payload: null,
    method: "get",
    ...props,
  };
};
