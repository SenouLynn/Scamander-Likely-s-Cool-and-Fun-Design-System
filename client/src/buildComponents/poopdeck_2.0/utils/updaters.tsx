import { createComponentPackage } from "../../../_components/_theme/utils/helpers";
import { addComponentToField } from "./helpers";

export const updaters = (
  props: AtLeast<ComponentManager_New, "field">,
  state: { setPack: any; setField: any; setDisplayState: any; setFocused: any }
): ComponentUpdaters => {
  const update = {
    pack: (p: ComponentPackage) => {
      //update master pack (for display state)
      state.setPack(p);
      //update field objects (for storage)
      update.field(p);
    },
    focusedPack: (p: ComponentPackage) => {
      state.setFocused(p);
    },
    field: (p: ComponentPackage, parent?: ComponentPackage) => {
      const newField = addComponentToField(p, props.field, parent);
      state.setField(newField);

    },
    displayState: (display: Partial<DisplayStateShape>) => {
      state.setDisplayState(display);
    },
  };

  return update;
};

export const updateZoomLevel = (
  updater: "add" | "sub",
  original: number
): number => {
  let zoomLevel = original;
  if (updater === "add") {
    if (zoomLevel < 7) zoomLevel += 1;
  } else {
    if (zoomLevel > -7) zoomLevel -= 1;
  }
  return zoomLevel;
};
