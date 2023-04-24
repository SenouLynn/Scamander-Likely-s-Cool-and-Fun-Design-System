import { createContext } from "react";
import "../../styles/global.css";
import {
  useGetters,
  useInitFunctions,
  useSetters,
  useUpdaters,
} from "./utils/hooks";

//<--- Master Styles Provider: Highly load bearing --->//
export default function ThemeWrapper(props: ThemeWrapperProps) {
  const { mode = "test" } = props;

  const data = useInitFunctions(props);
  const getters = useGetters(data);
  const updaters = useUpdaters(data);
  const setters = useSetters(data);

  const value = {
    mode,
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
  componentList: {},
  defaultStyles: {},
  setData: (value: any) => null,
  componentPackage: () => null,
  pages: () => null,
  setComponentList: (value: any) => null,
  pagesList: {},
  routes: {},
  asteroidBelt: {},
  updateSubComponents: (updater: Omit<UpdateSubComponentProps, "initData">) =>
    null,
  updateComponentStyle: (updater: Omit<UpdateStyleProps, "initData">) => null,
});
