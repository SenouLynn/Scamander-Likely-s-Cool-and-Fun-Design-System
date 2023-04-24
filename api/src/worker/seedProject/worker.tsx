import { writeToDb } from "../../firebase_interface";
import { checkAndUpdateDoc } from "../../utils/firestore/checkers";
import { writeBatchDocs } from "../../utils/firestore/setters";

export const createProject = async (
  app?: Partial<Project>
): Promise<ResponseMessage> => {
  const meta = {
    appId: "newApp",
    label: "Label",
    theme: "development",
    ...app,
  };
  const collections = ["development", "production"];
  const themes: ThemePackage[] = collections.map((collection) => {
    return createTheme({ id: collection });
  });
  const writeMeta = await checkAndUpdateDoc({
    query: [meta.appId],
    payload: meta,
  });
  const writeThemes = await writeBatchDocs({
    query: [meta.appId, "themes"],
    payloads: themes,
  });

  return writeMeta;
};

export const createTheme = (theme?: Partial<ThemePackage>): ThemePackage => {
  return {
    id: "development",
    label: "Development",
    field: {},
    routes: {},

    ...theme,
  };
};
