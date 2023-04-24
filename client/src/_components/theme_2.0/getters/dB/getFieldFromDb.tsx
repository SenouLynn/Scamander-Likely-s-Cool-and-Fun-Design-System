import { dbGet } from "../../../../routes/query/actions";

const project = "fresh-pressed";
const themeId = "development";

const getTheme = async () => {
  const route = dbGet.getTheme({ project, themeId });
  const res = await fetch(route.endpoint);
  let data = await res.json();
  return data;
};
export default getTheme;
