interface ComponentManager_New {
  original: ComponentPackage;
  pack: ComponentPackage;
  focused: ComponentPackage;
  field: ComponentPackageSet;

  update: ComponentUpdaters;
  save: ComponentSetters;
  displayState: DisplayStateShape;
}

type ComponentUpdaters = {
  pack: (p: ComponentPackage, parent?: ComponentPackage) => void;
  field: (p: ComponentPackage, parent?: ComponentPackage) => void;
  focusedPack: (p: ComponentPackage) => void;
  displayState: (k: any) => void;
};

type ComponentSetters = {
  local: () => void;
  db: () => void;
};

type DisplayStateShape = {
  zoomLevel: number;
  canvas:
    | "fit-content"
    | "page"
    | "mobile"
    | "desktop"
    | "monitor"
    | "viewport";
};
