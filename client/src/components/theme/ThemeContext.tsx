import { createContext, useState } from "react";
import { useInitFunctions } from "./utils/hooks";
import { useGetters } from "./utils/hooks";
const getters = {
  getComponentDefaultStyle: (props: ComponentPackage) => null, // getDefaultStyles for type of component (row/container/nav etc...)
};
const updaters = {
  updateComponentStyle: (props: ComponentPackage) => null, //tack on new styles + overwrite default
  updateComponentChildren: (props: ComponentPackage) => null, //tack on new subComponents
};

export default function ThemeWrapper(props: any) {
  const { mode = "test" } = props;
  const data = useInitFunctions();
  const getters = useGetters(data);

  const [openComponents, setOpenComponents] = useState<string>("");
  const value = {
    mode,
    openComponents,
    setOpenComponents,
    ...data,
    ...getters,
    ...updaters,
    getStyleOptions: (props: ComponentPackage) => null, // getControlOptions
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
  getStyleOptions: () => {},
  componentList: {},
  componentPackage: () => null,
  openComponents: "",
  setOpenComponents: (value: string) => null,
});
