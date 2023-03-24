import "../../styles/global.css";
import { createContext, useState } from "react";
import ThemeOrbitals from "./ThemeOrbitals";
import { useInitFunctions } from "./utils/hooks";
import { useGetters } from "./utils/hooks";
import { updateStyles, updateComponentSubComponents } from "./utils/updaters";

export default function ThemeWrapper(props: ThemeWrapperProps) {
  const [openComponents, setOpenComponents] = useState<any>({});
  const { mode = "test" } = props;

  //get data
  const data = useInitFunctions(props);

  //get styles from context
  const getters = useGetters(data);

  //update styles from control
  const updateComponentStyle = (
    updater: Omit<UpdateStyleProps, "allStyles">
  ) => {
    data.setData(updateStyles({ ...updater, allStyles: data }));
  };

  const updateSubComponents = (
    updater: Omit<UpdateSubComponentProps, "allStyles">
  ) => {
    data.setData(updateComponentSubComponents({ ...updater, allStyles: data }));
  };

  const value = {
    mode,
    openComponents,
    setOpenComponents,
    ...data,
    ...getters,
    updateComponentStyle,
    updateSubComponents,
  };
  return (
    <ThemeContext.Provider value={value}>
      <ThemeOrbitals>{props.children}</ThemeOrbitals>
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
  openComponents: {},
  pagesList: {},
  routes: {},
  setOpenComponents: (value: any) => null,
  updateSubComponents: (updater: Omit<UpdateSubComponentProps, "allStyles">) =>
    null,
  updateComponentStyle: (updater: Omit<UpdateStyleProps, "allStyles">) => null,
});
