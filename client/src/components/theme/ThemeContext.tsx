import "../../styles/global.css";
import { createContext, useState } from "react";
import {
  useGetters,
  useInitFunctions,
  useSetters,
  useUpdaters,
} from "./utils/hooks";
import ZoomWrapper from "../../buildComponents/poopdeck/components/ZoomWrapper";
//<--- Master Styles Provider: Highly load bearing --->//
export default function ThemeWrapper(props: ThemeWrapperProps) {
  const [openComponents, setOpenComponents] = useState<any>({});
  const { mode = "test" } = props;

  const data = useInitFunctions(props);

  const getters = useGetters(data);
  const updaters = useUpdaters(data);
  const setters = useSetters(data);

  const value = {
    mode,
    openComponents,
    setOpenComponents,
    ...data,
    ...getters,
    ...updaters,
    ...setters,
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: "test",
  controlOptions: {},
  componentList: {},
  defaultStyles: {},
  setData: (value: any) => null,
  componentPackage: () => null,
  pages: () => null,
  setComponentList: (value: any) => null,
  openComponents: {},
  pagesList: {},
  routes: {},
  asteroidBelt: {},
  setOpenComponents: (value: any) => null,
  updateSubComponents: (updater: Omit<UpdateSubComponentProps, "initData">) =>
    null,
  updateComponentStyle: (updater: Omit<UpdateStyleProps, "initData">) => null,
});
