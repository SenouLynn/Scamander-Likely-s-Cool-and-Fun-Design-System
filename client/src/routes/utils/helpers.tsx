import { Page } from "../Page";

export const createRoutes = (routes: DbRoutes): ReactRoute[] => {
  return Object.values(routes).reduce((acc: ReactRoute[], route: DbRoute) => {
    let p = acc;
    const Component = () =>
      Page({}, { ...route.componentIds, ...route.subComponents });
    p.push({
      path: route.route,
      element: <Component />,
    });

    return p;
  }, []);
};
