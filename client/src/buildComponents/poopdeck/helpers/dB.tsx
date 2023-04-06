import { useEffect, useState } from "react";
import { route } from "../../../components/theme/query/utils/createRoutes";
import axios from "axios";

//<-- These Should Be Hella Tested --->//
export const saveComponentToDb = async ({
  payload,
}: {
  payload: ComponentPackage;
}) => {
  //What should this do?
  //1. Send new/existing component to db.
  //2. Update componentList in ThemeContext (optimistic loading)
  //3. Update dbField and repopulate
  axios
    .post("http://localHost:8000/api/updateComponent", payload)
    .then((response) => console.log(response.data));
};
