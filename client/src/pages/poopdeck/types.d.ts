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
  pack: (p: ComponentPackage, parent?: ComponentPackage) => UpdateReturn;
  field: (p: ComponentPackage, parent?: ComponentPackage) => UpdateReturn;
  focusedPack: (p: ComponentPackage) => UpdateReturn;
  displayState: (k: any) => void;
};

type UpdateReturn = {
  pack: ComponentPackage;
  field: ComponentPackageSet;
};
type ComponentSetters = {
  local: (p: ComponentPackage) => UpdaterReturn;
  db: (p: ComponentPackage) => UpdateReturn;
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
