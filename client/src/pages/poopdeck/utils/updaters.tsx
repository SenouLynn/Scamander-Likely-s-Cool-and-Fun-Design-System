import {
  addComponentToField,
  cleanField,
  cleanPack,
  createComponentTree,
} from "./helpers";

export const updaters = (
  props: AtLeast<ComponentManager_New, "field">,
  state: { setPack: any; setField: any; setDisplayState: any; setFocused: any }
): ComponentUpdaters => {
  
  const update = {
    pack: (p: ComponentPackage) => {
      let cleaned = cleanPack(p);
      const { pack, field } = update.field(cleaned);
      state.setPack(cleaned);
      return { pack, field };
    },
    focusedPack: (p: ComponentPackage) => {
      let pack = cleanPack(p);
      let field = cleanField(props.field);

      update.field(pack);

      state.setFocused(createComponentTree(pack, field));

      //Trickle down to field
      //If seed, then pack is focused
      if (p.location === "seedComponent") {
        let updated = update.pack(pack);
        field = updated.field;
        pack = updated.pack;
      }
      return {
        pack,
        field,
      };
    },
    field: (p: ComponentPackage, parent?: ComponentPackage) => {
      let pack = p;
      let field = addComponentToField(pack, props.field, parent);
      state.setField(field);

      if (p.location === "seedComponent") {
        let updated = update.focusedPack(pack);
        field = updated.field;
        pack = updated.pack;
      }
      return { pack, field };
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
