import { updateAndAddKeyValues } from "../../utils/firestore/checkers";
import { getDocument } from "../../utils/firestore/getters";

export const getTheme = async ({
  projectId,
  themeId,
}: {
  projectId: string;
  themeId: string;
}): Promise<ResponseMessage> => {
  const theme = await getDocument([projectId, "themes", themeId]);
  return theme;
};

export const updateTheme = async ({
  projectId,
  themeId,
  payload,
}: UpdateThemePayload): Promise<ResponseMessage> => {

  const writeTheme = await updateAndAddKeyValues({
    query: [projectId, "themes", themeId],
    payload,
  });

  return writeTheme;
};
