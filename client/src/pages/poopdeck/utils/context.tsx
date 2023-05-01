import { createContext } from "react";

export const PoopDeckContext = createContext<ComponentManager_New>({
  original: {} as ComponentPackage,
  pack: {} as ComponentPackage,
  focused: {} as ComponentPackage,
  update: {
    pack: () => {},
    focusedPack: () => {},
    field: () => {},
    displayState: () => {},
  },
  save: {
    local: () => {},
    db: () => {},
  },
  field: {},
  displayState: {
    zoomLevel: 1,
    canvas: "viewport",
  },
});
