import { useEffect, useState } from "react";
import { route } from "../query/utils/createRoutes";
import { getComponentPackage, getPagePackage } from "./helpers";
import { componentList, controlOptions, defaultStyles } from "./mocks";

export const useInitFunctions = (
  props: Partial<ThemeWrapperProps>
): InitData & { setData: any } => {
  const [data, setData] = useState<InitData | null>(null);

  //Get all component styles from db
  useEffect(() => {
    const getAll = async () => {
      await fetch(route("getAll")).then((response) =>
        response.json().then((res) => {
          res && setData(res);
          res &&
            setData({
              componentList: res.componentList,
              defaultStyles: res.defaultStyles,
              controlOptions: res.controlOptions,
              pagesList: res.pages,
              routes: res.routes,
            });
        })
      );
    };
    //Fetch from db component List
    !data && getAll();
    // Passed Component List
    !data &&
      setData({
        componentList: (props.componentList as ComponentStyleObj) || {},
        defaultStyles: {},
        controlOptions: {},
        pagesList: {},
        routes: {},
      });
  }, []);
  //Pass to context
  if (data) {
    return {
      ...data,
      componentList: componentList(data.componentList),
      defaultStyles: defaultStyles(data.defaultStyles),
      controlOptions: controlOptions(data.controlOptions),
      routes: data.routes,
      // pages:
      setData,
    };
  } else {
    return {
      componentList: {},
      defaultStyles: {},
      controlOptions: {},
      pagesList: {},
      routes: {},
      setData,
    };
  }
};

export const useGetters = (data: InitData) => {
  const componentPackage = ({ defaultStyleId, componentId }: ComponentIds) =>
    getComponentPackage({ allStyles: data, defaultStyleId, componentId });

  const pages = ({ defaultStyleId, componentId }: ComponentIds) =>
    getPagePackage({ allStyles: data, defaultStyleId, componentId });

  return {
    componentPackage,
    pages,
  };
};
