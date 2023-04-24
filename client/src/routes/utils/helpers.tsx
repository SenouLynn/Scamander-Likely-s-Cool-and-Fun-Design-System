export const findPage = (
  location: string,
  routes: PageRoutes,
  field: { [key: string]: ComponentPackage }
): ComponentPackage | undefined => {
  const route = Object.values(routes).find((r) => r.route === location);
  const packlocation = route?.componentIds.location;
  if (!packlocation) {
    console.warn("No location found: ", route);
    return undefined;
  }
  if (!field[packlocation]) {
    console.warn("No component found for route: ", packlocation);
    return undefined;
  }
  return field[packlocation];
};
