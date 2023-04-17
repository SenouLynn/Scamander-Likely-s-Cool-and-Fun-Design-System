import { updateComponentsPayload } from "./utils/createPayloads";
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
    createRoute({
      endpoint: `/getTheme/${project}/${themeId}`,
      method: "get",
      payload: {},
    }),
  updateComponents: ({
    components,
    project,
    themeId,
  }: {
    project: string;
    themeId: String;
    components: { [key: string]: ComponentPackage };
  }) =>
    createRoute({
      endpoint: `/updateTheme/${project}/${themeId}`,
      method: "post",
      payload: updateComponentsPayload(components),
    }),
};
