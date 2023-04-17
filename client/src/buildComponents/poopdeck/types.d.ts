type PackField = {
  [key: string]: ComponentPackage;
};

type ComponentManager = {
  original: Partial<ComponentPackage>;
  pack: Partial<ComponentPackage>;
  updaters: {
    masterPack: (p: ComponentPackage, parent?: ComponentPackage) => void;
    field: (p: ComponentPackage, parent?: ComponentPackage) => void;
    saveLocal: () => void;
    saveDb: () => void;
    updateFocus: (p: ComponentPackage) => void;
  };
  field: {
    [key: string]: ComponentPackage;
  };
};

type UpdatePackagePayload = {
  pack: ComponentPackage;
  field: { [key: string]: ComponentPackage };
  parent?: ComponentPackage;
};
