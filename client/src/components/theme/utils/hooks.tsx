import { useEffect, useState } from "react";
import { createRoute } from "../query/createRoutes";
import { getComponentPackage } from "./helpers";

export const useInitFunctions = (): InitData => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getAll = async () => {
      await fetch(createRoute("getAll")).then((response) =>
        response.json().then((res) => setData(res))
      );
    };
    !data && getAll();
  }, []);

  if (data) {
    return data;
  } else {
    return {
      componentList: {},
      defaultStyles: {},
      controlOptions: {},
    };
  }
};

export const useGetters = (data: InitData) => {
  const componentPackage = ({ defaultId, componentId }: GetComponentPackage) =>
    getComponentPackage({ allStyles: data, defaultId, componentId });

  return {
    componentPackage,
  };
};
