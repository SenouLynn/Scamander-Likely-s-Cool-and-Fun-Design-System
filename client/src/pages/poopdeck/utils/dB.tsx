import axios from "axios";
import { dbRoutes } from "routes/query/dbRoutes";
import { dbPost } from "routes/utils/axios";

//<-- These Should Be Hella Tested --->//
export const saveComponentToDb = async ({
  pack,
  field,
}: {
  pack: ComponentPackage;
  field: { [key: string]: ComponentPackage };
}) => {
  //Handle for if new component, make root location uniqueId, not 0
  const project = "fresh-pressed";
  const themeId = "development";

  const route = dbRoutes.updateComponents({
    project,
    themeId,
    components: field,
  });

  return await dbPost(route);
};
