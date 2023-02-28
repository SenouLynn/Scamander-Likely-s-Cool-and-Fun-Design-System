export const resolvePath = (obj: any, value: string, propPath: string) => {
  const [head, ...rest] = propPath.split(".");
  let o = obj;
  !rest.length
    ? (o[head] = value)
    : resolvePath(o[head], value, rest.join("."));

  return o;
};
