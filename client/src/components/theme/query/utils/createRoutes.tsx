import { routes } from "../routes";

export const route = (props: string): string => {
  const config = routes[props];
  if (config) {
    return [config.base, props].join("/");
  }
  throw new Error(`Trying to access ${props}, it doesn't seem to exist`);
};
