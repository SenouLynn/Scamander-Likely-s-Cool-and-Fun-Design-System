import { useEffect, useState } from "react";
import { route } from "../query/utils/createRoutes";

import { createInitData, getComponentPackage, getPagePackage } from "./helpers";
import { componentList, controlOptions, defaultStyles } from "./mocks";
import { updateComponentSubComponents, updateStyles } from "./updaters";

export const useInitFunctions = (
  props: Partial<ThemeWrapperProps>
): InitData => {
  const [data, setData] = useState<InitData | null>(null);

  //Get all component styles from db
  useEffect(() => {
    const getAll = async () => {
      await fetch(route("getAll")).then((response) =>
        response.json().then((res) => {
          res && setData(res);
          res &&
            setData(
              createInitData({
                componentList: res.componentList,
                defaultStyles: res.defaultStyles,
                controlOptions: res.controlOptions,
                pagesList: res.pages,
                routes: res.routes,
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
          componentList: (props.componentList as ComponentStyleObj) || {},
        })
      );
  }, []);
  //Pass to context
  if (data) {
    return createInitData({
      ...data,
      componentList: componentList(data.componentList),
      defaultStyles: defaultStyles(data.defaultStyles),
      controlOptions: controlOptions(data.controlOptions),
      routes: data.routes,
      // pages:
      setData,
    });
  } else {
    return createInitData();
  }
};

export const useGetters = (data: InitData) => {
  const componentPackage = ({ defaultStyleId, componentId }: ComponentIds) =>
    getComponentPackage({ initData: data, defaultStyleId, componentId });

  const pages = ({ defaultStyleId, componentId }: ComponentIds) =>
    getPagePackage({ initData: data, defaultStyleId, componentId });

  return {
    componentPackage,
    pages,
  };
};
export const useUpdaters = (data: InitData) => {
  const updateComponentStyle = (
    updater: Omit<UpdateStyleProps, "initData">
  ) => {
    data.setData(updateStyles({ ...updater, initData: data }));
  };
  const updateSubComponents = (
    updater: Omit<UpdateSubComponentProps, "initData">
  ) => {
    data.setData(updateComponentSubComponents({ ...updater, initData: data }));
  };
  return {
    updateComponentStyle,
    updateSubComponents,
  };
};

export const useSetters = (data: InitData) => {
  return {
    setComponentList: (component: ComponentPackage) =>
      data.setData({
        ...data,
        componentList: {
          ...data.componentList,
          [component.componentId]: component,
        },
      }),
  };
};
