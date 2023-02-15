import { createContext, useMemo, useState } from "react";
import Query from "./Query";
import { componentManifest } from "./utils/fakeDb/component.manifest";
import { controlOptions } from "./utils/fakeDb/controlOptions.manifest";

const fromReduxLayer = {
  componentList: componentManifest,
  controlOptions: controlOptions,
};

export default function ThemeWrapper(props: any) {
  const { mode = "test" } = props;

  const getFromElseWhere = useMemo(() => fromReduxLayer, [fromReduxLayer]);
  const getters = {
    getStyleOptions: (props: ComponentPackage) => null, // getControlOptions
    getComponentDefaultStyle: (props: ComponentPackage) => null, // getDefaultStyles for type of component (row/container/nav etc...)
  };
  const updaters = {
    updateComponentStyle: (props: ComponentPackage) => null, //tack on new styles + overwrite default
    updateComponentChildren: (props: ComponentPackage) => null, //tack on new subComponents
  };
  const [openComponents, setOpenComponents] = useState<string>("");
  const value = {
    mode,
    openComponents,
    setOpenComponents,
    ...getFromElseWhere,
    ...getters,
    ...updaters,
  };
  return (
    <ThemeContext.Provider value={value}>
      <Query />
      {props.children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: "test",
  controlOptions: {},
  getStyleOptions: () => {},
  componentList: {},
  getComponentDefaultStyle: () => null,
  openComponents: "",
  setOpenComponents: (value: string) => null,
});
