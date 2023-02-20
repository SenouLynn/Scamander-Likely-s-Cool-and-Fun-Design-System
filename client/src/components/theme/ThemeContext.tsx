import { createContext, useState } from "react";
import ThemeOrbitals from "./ThemeOrbitals";
import { useInitFunctions } from "./utils/hooks";
import { useGetters } from "./utils/hooks";
import "../../styles/global.css";
import { updateStyles } from "./utils/updaters";

const updaters = {
  updateComponentChildren: (props: ComponentPackage) => null, //tack on new subComponents
};

export default function ThemeWrapper(props: any) {
  const { mode = "test" } = props;
  const data = useInitFunctions();
  const getters = useGetters(data);

  const [openComponents, setOpenComponents] = useState<any>({});

  const updateComponentStyle = (
    updater: Omit<UpdateStyleProps, "allStyles">
  ) => {
    data.setData(updateStyles({ ...updater, allStyles: data }));
    return;
  };

  const value = {
    mode,
    openComponents,
    setOpenComponents,
    ...data,
    ...getters,
    // ...updaters,
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
  componentPackage: () => null,
  openComponents: {},
  setOpenComponents: (value: any) => null,
  updateComponentStyle: (updater: Omit<UpdateStyleProps, "allStyles">) => null,
});
