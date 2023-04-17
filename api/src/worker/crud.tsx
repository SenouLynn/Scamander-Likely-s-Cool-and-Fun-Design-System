import { getAppFromDb } from "../firebase_interface";

//Read
export const getApp = async (appId: string) => {
  return await getAppFromDb("freshPressed");
};
const getComponents = () => {};
const getPages = () => {};
const getField = () => {};

//Update
const updateComponent = (component: any) => {};
const updatePage = (page: any) => {};
const updateField = (field: any) => {};

//Delete
const deleteComponent = (component: any) => {};
const deletePage = (page: any) => {};
const deleteField = (field: any) => {};
