import "../../styles/global.css";
import { createContext, useState } from "react";
import ThemeOrbitals from "./ThemeOrbitals";
import { useInitFunctions } from "./utils/hooks";
import { useGetters } from "./utils/hooks";
import { updateStyles } from "./utils/updaters";

export default function ThemeWrapper(props: any) {
  const [openComponents, setOpenComponents] = useState<any>({});
  const { mode = "test" } = props;

  //get data
  const data = useInitFunctions();

  //get styles from context
  const getters = useGetters(data);

  //update styles from control
  const updateComponentStyle = (
    updater: Omit<UpdateStyleProps, "allStyles">
  ) => {
    data.setData(updateStyles({ ...updater, allStyles: data }));
  };

  const value = {
    mode,
    openComponents,
    setOpenComponents,
    ...data,
    ...getters,
    updateComponentStyle,
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
  openComponents: {},
  setOpenComponents: (value: any) => null,
  updateComponentStyle: (updater: Omit<UpdateStyleProps, "allStyles">) => null,
});
