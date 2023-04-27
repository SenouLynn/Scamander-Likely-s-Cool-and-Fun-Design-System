import { dbRoutes } from "./dbRoutes";

export const createRouteConfig = (props: EndPointConfig): RouteConfig => {
  const base = "http://localhost:8000/api";
  const endpoint = base + props.endpoint;

  return {
    base,
    ...props,
    endpoint,
  };
};

//THESE DO NOTHING, JUST ORGANIZING


export const dbPost = {
  updateComponents: (props: {
    project: string;
    themeId: string;
    components: { [key: string]: ComponentPackage };
  }) => createRouteConfig(dbRoutes.updateComponents(props)),
};
