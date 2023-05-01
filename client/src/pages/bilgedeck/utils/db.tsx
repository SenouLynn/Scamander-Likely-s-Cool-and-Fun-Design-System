import axios from "axios";
import { dbRoutes } from "../../../routes/query/dbRoutes";

//Spikikng right now, come back and set this in global state somewhere
const project = "fresh-pressed";
const themeId = "development";

export const deletePack = async (pack: ComponentPackage) => {
  const route = dbRoutes.deletePack({
    project,
    themeId,
    payload: pack,
  });

  try {
    const response = await axios.post(route.endpoint, route.payload);
    //Todo: return response and update state if needed
    console.log("Add Pack Response: ", response);
    return response.data.payload;
  } catch (e) {
    //Todo: Better error handling here
    console.log("Add Pack Error: ", e);
    return null;
  }
};

export const addPack = async (pack: ComponentPackage) => {
  const route = dbRoutes.addPack({
    project,
    themeId,
    payload: pack,
  });

  try {
    const response = await axios.post(route.endpoint, route.payload);
    //Todo: return response and update state if needed
    return response.data.payload;
  } catch (e) {
    //Todo: Better error handling here
    return null;
  }
};
