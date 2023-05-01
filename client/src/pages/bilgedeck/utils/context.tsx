import { createContext } from "react";

export const createBilgeDeckContext = (
  props?: Partial<BilgeDeckContext>
): BilgeDeckContext => {
  return {
    update: {
      deletePack: () => {},
      updatePack: () => {},
      addPack: () => {},
    },
    ...props,
  };
};

export const BilgedeckContext = createContext<BilgeDeckContext>(
  createBilgeDeckContext()
);

type BilgeDeckContext = {
  field?: ComponentPackageSet;
  update: {
    deletePack: (ids: ComponentPackage) => any; //db response
    updatePack: () => void;
    addPack: (pack: ComponentPackage) => any;
  };
  children?: any;
};
