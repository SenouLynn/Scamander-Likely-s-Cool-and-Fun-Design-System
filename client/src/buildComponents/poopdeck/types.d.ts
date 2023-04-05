
type PackField = {
  [key: string]: ComponentPackage;
};

type ComponentManager = {
  original: Partial<ComponentPackage>;
  pack: Partial<ComponentPackage>;
  updaters: {
    masterPack: (p: ComponentPackage, parent?: ComponentPackage) => void;
    field: (p: ComponentPackage, parent?: ComponentPackage) => void;
    save: () => void;
  };
  field: {
    [key: string]: ComponentPackage;
  };
};
