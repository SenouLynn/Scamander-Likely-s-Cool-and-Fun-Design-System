import axios from "axios";

export const dbGet = async (route: RouteConfig) => {
  try {
    const response = await axios.get(route.endpoint, route.payload);
    //Todo: return response and update state if needed
    console.log("Res: ", response);
    return response.data.payload;
  } catch (e) {
    //Todo: Better error handling here
    console.log("Error: ", e);
    return null;
  }
};
export const dbPost = async (route: RouteConfig) => {
  try {
    const response = await axios.post(route.endpoint, route.payload);
    //Todo: return response and update state if needed
    console.log("Res: ", response);
    return response.data.payload;
  } catch (e) {
    //Todo: Better error handling here
    console.log("Error: ", e);
    return null;
  }
};
