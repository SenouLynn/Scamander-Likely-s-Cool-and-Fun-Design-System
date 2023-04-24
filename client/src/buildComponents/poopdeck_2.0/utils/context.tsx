import { createContext } from "react";
import { createComponentPackage } from "../../../_components/_theme/utils/helpers";

export const PoopDeckContext = createContext<ComponentManager_New>({
  original: createComponentPackage({}),
  pack: createComponentPackage({}),
  focused: createComponentPackage({}),
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
