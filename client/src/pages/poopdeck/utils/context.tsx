import { createContext } from "react";

export const PoopDeckContext = createContext<ComponentManager_New>({
  original: {} as ComponentPackage,
  pack: {} as ComponentPackage,
  focused: {} as ComponentPackage,
  update: {
    pack: () => ({
      pack: {} as ComponentPackage,
      field: {} as ComponentPackageSet,
    }),
    focusedPack: () => ({
      pack: {} as ComponentPackage,
      field: {} as ComponentPackageSet,
    }),
    field: () => ({
      pack: {} as ComponentPackage,
      field: {} as ComponentPackageSet,
    }),
    displayState: () => {},
  },
  save: {
    local: (p: ComponentPackage) => ({
      pack: {} as ComponentPackage,
      field: {} as ComponentPackageSet,
    }),
    db: (pack: ComponentPackage) => ({
      pack: {} as ComponentPackage,
      field: {} as ComponentPackageSet,
    }),
  },
  field: {},
  displayState: {
    zoomLevel: 1,
    canvas: "viewport",
  },
});
