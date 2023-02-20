import { Component, useEffect, useState } from "react";
import { createRoute } from "../query/utils/createRoutes";
import { getComponentPackage } from "./helpers";
import { componentList, controlOptions, defaultStyles } from "./mocks";

export const useInitFunctions = (): InitData & { setData: any } => {
  const [data, setData] = useState<InitData | null>(null);
  useEffect(() => {
    const getAll = async () => {
      await fetch(createRoute("getAll")).then((response) =>
        response.json().then((res) => setData(res))
      );
    };
    !data && getAll();
  }, []);
  if (data) {
    return {
      ...data,
      componentList: componentList(data.componentList),
      defaultStyles: defaultStyles(data.defaultStyles),
      controlOptions: controlOptions(data.controlOptions),
      setData,
    };
  } else {
    return {
      componentList: {},
      defaultStyles: {},
      controlOptions: {},
      setData,
    };
  }
};

export const useGetters = (data: InitData) => {
  const componentPackage = ({ defaultId, componentId }: ComponentIds) =>
    getComponentPackage({ allStyles: data, defaultId, componentId });
  return {
    componentPackage,
  };
};
