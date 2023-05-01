import { createRouteConfig } from "./actions";
import { packComponentsForDb } from "./utils/createPayloads";
import { createRoute } from "./utils/createRoutes";

export const dbRoutes = {
  seedProject: createRoute({
    endpoint: "/seedProject",
    method: "post",
    payload: {},
  }),
  getProject: ({}) =>
    createRoute({
      endpoint: "/getProject/:id",
      method: "get",
      payload: {},
    }),
  getTheme: ({ project, themeId }: { project: string; themeId: string }) =>
    createRouteConfig(
      createRoute({
        endpoint: `/getTheme/${project}/${themeId}`,
        method: "get",
        payload: {},
      })
    ),
  updateComponents: ({
    components,
    project,
    themeId,
  }: {
    project: string;
    themeId: String;
    components: { [key: string]: ComponentPackage };
  }) =>
    createRouteConfig(
      createRoute({
        endpoint: `/updateTheme/${project}/${themeId}`,
        method: "post",
        payload: packComponentsForDb(components),
      })
    ),

  //New Routes
  deletePack: ({ payload, project, themeId }: DbPayload<ComponentPackage>) =>
    createRouteConfig(
      createRoute({
        endpoint: `/deletePack/${project}/${themeId}`,
        method: "post",
        payload,
      })
    ),
  addPack: ({ payload, project, themeId }: DbPayload<ComponentPackage>) =>
    createRouteConfig(
      createRoute({
        endpoint: `/addPack/${project}/${themeId}`,
        method: "post",
        payload,
      })
    ),

  //updateComponent
  //deleteComponent
  //createComponent
};
