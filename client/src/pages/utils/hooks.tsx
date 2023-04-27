import { useEffect, useState } from "react";

import { dbRoutes } from "routes/query/dbRoutes";
import { createInitData } from "./helpers";

//Fake Constants => Should get form env
const project = "freshPressed";
const themeId = "developement";

export const useInitFunctions = (
  props: Partial<ThemeWrapperProps>
): InitData => {
  const [data, setData] = useState<InitData | null>(null);

  //Get all component styles from db
  useEffect(() => {
    const getAll = async () => {
      await fetch(dbRoutes.getTheme({ project, themeId }).endpoint).then(
        (response) =>
          response.json().then((res) => {
            const data = res.payload.payload;

            data &&
              setData(
                createInitData({
                  componentList: data.components || {},
                  defaultStyles: data.defaultStyles || {},
                  pagesList: data.pages || {},
                  routes: data.routes || {},
                })
              );
          })
      );
    };

    //Fetch from db component List
    !data && getAll();
    // Passed Component List
    !data &&
      setData(
        createInitData({
          componentList: props.componentList || {},
        })
      );
  }, []);

  //Pass to context
  if (data) {
    return createInitData({
      ...data,
      setData,
    });
  } else {
    return createInitData();
  }
};
