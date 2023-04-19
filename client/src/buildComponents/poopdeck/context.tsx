import { createContext } from "react";
import { createComponentPackage } from "../../components/theme/utils/helpers";

export const PoopDeckContext = createContext<ComponentManager>({
  original: {} as ComponentPackage,
  pack: {} as ComponentPackage,
  updaters: {
    masterPack: (p: ComponentPackage) => {},
    field: (p: ComponentPackage) => {},
    saveLocal: () => {},
    saveDb: () => {},
    updateFocus: () => {},
    updateDisplayState: () => {},
    updateFocusedState: () => {},
  },
  field: {},
  setDisplayState: () => {},
  displayState: {
    zoomLevel: 1,
    canvas: "viewport",
  },
  focusedComponent: {} as ComponentPackage,
});
