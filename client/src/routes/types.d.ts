type DbRoute = {
  id: string;
  label: string;
  route: string;
  subComponents: Partial<ComponentIds[]> | null;
  componentIds: Partial<ComponentIds>;
};

type DbRoutes = {
  [key: string]: DbRoute;
};

type ReactRoute = {
  path: string;
  element: JSX.Element;
};
