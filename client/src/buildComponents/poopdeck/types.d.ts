type ComponentBuilderProps = {
  pack: ComponentPackage;
  updatePack: {
    self: {
      updatePack: (p: ComponentPackage) => void;
      updateChild: (p: ComponentPackage) => void;
    };
    parent: {
      updatePack: (p: ComponentPackage) => void;
      updateChild: (p: ComponentPackage) => void;
    };
    field?: {
      updatePack: (child: ComponentPackage, parent?: ComponentPackage) => void;
      updateChild: (p: ComponentPackage, parent?: ComponentPackage) => void;
    };
  };
  packField: PackField;
  Context: any; //Top most parent object
};

type PackField = {
  [key: string]: ComponentPackage;
};
