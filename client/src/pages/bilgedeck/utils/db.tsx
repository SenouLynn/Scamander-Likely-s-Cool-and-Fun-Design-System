import axios from "axios";
import { dbRoutes } from "../../../routes/query/dbRoutes";

//Spikikng right now, come back and set this in global state somewhere
const project = "fesh-pressed";
const themeId = "development";

export const deletePack = async (ids: ComponentIds) => {
  const route = dbRoutes.deletePack({
    project,
    themeId,
    payload: ids,
  });

  await axios
    .post(route.endpoint, route)
    .then((response) => console.log(response.data));

  try {
    const response = await axios.post(route.endpoint, route);
    //Todo: return response and update state if needed
    console.log("Delete Response: ", response);
  } catch (e) {
    //Todo: Better error handling here
    console.log("Delete Error: ", e);
  }
};
