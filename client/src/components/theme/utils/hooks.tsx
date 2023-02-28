import { useEffect, useState } from "react";
import { route } from "../query/utils/createRoutes";
import { getComponentPackage } from "./helpers";
import { componentList, controlOptions, defaultStyles } from "./mocks";

export const useInitFunctions = (): InitData & { setData: any } => {
  const [data, setData] = useState<InitData | null>(null);
  //Get all component styles from db
  useEffect(() => {
    const getAll = async () => {
      await fetch(route("getAll")).then((response) =>
        response.json().then((res) => setData(res))
      );
    };
    !data && getAll();
  }, []);

  //Pass to context
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
  const componentPackage = ({ defaultStyleId, componentId }: ComponentIds) =>
    getComponentPackage({ allStyles: data, defaultStyleId, componentId });
  return {
    componentPackage,
  };
};
