import axios from "axios";
import { dbPost } from "../../../routes/query/actions";

//<-- These Should Be Hella Tested --->//
export const saveComponentToDb = async ({
  pack,
  field,
}: {
  pack: ComponentPackage;
  field: { [key: string]: ComponentPackage };
}) => {
  //Handle for if new component, make root location uniqueId, not 0
  const project = "freshPressed";
  const themeId = "developement";

  const route = dbPost.updateComponents({
    project,
    themeId,
    components: field,
  });

  axios
    .post(route.endpoint, route)
    .then((response) => console.log(response.data));
};
