import { updateAndAddKeyValues } from "../../utils/firestore/checkers";
import { getDocument } from "../../utils/firestore/getters";
import { deleteFieldDoc } from "../../utils/firestore/setters";


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

export const deletePack = async ({
  projectId,
  themeId,
  location,
}: DeleteComponentProps): Promise<ResponseMessage> => {
  const deletePack = await deleteFieldDoc({
    query: [projectId, "themes", themeId],
    key: "field." + location,
  });
  return deletePack;
};
