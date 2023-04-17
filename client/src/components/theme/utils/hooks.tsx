import { useEffect, useState } from "react";

import {
  createComponentPackage,
  createInitData,
  getComponentPackage,
  getPagePackage,
} from "./helpers";
import { componentList, controlOptions, defaultStyles } from "./mocks";
import { updateComponentSubComponents, updateStyles } from "./updaters";
import { dbGet } from "../../../routes/query/actions";

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
      await fetch(dbGet.getTheme({ project, themeId }).endpoint).then(
        (response) =>
          response.json().then((res) => {
            const data = res.payload;
            data && setData(data.payload);
            data &&
              setData(
                createInitData({
                  componentList: data.payload.components,
                  defaultStyles: data.defaultStyles,
                  controlOptions: data.controlOptions,
                  pagesList: data.pages,
                  routes: data.routes,
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
    setComponentList: (component: ComponentPackage) => {
      const newComponentList = { ...data.componentList };

      const addComponent = (p: ComponentPackage) => {
        newComponentList[p.componentId] = p;

        p.subComponents?.forEach((subComponent) => {
          subComponent &&
            addComponent(createComponentPackage({ pack: subComponent }));
        });
        return newComponentList;
      };
      //Run recursive function
      addComponent(component);

      data.setData({
        ...data,
        componentList: newComponentList,
      });
    },
  };
};
