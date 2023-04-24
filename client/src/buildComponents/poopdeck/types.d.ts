type PackField = {
  [key: string]: ComponentPackage;
};

type ComponentManager = {
  original: ComponentPackage;
  pack: ComponentPackage;
  updaters: {
    masterPack: (p: ComponentPackage, parent?: ComponentPackage) => void;
    field: (p: ComponentPackage, parent?: ComponentPackage) => void;
    saveLocal: () => void;
    saveDb: () => void;
    updateFocus: (p: ComponentPackage) => void;
    updateDisplayState: (k: any) => void;
    updateFocusedState: (k: any) => void;
    deleteComponent: (p: ComponentPackage) => void;
  };
  field: ComponentPackageSet;
  displayState: DisplayStateShape;
  setDisplayState: (state: any) => void;
  focusedComponent: ComponentPackage;
};

type UpdatePackagePayload = {
  pack: ComponentPackage;
  field: { [key: string]: ComponentPackage };
  parent?: ComponentPackage;
};

type DisplayStateShape = {
  zoomLevel: number;
  canvas: string;
};
