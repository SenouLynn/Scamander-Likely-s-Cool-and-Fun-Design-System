import { createContext } from "react";
import { deletePack } from "./db";

export const createBilgeDeckContext = (
  props?: Partial<BilgeDeckContext>
): BilgeDeckContext => {
  return {
    update: {
      deletePack,
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
    deletePack: (ids: ComponentIds) => any; //db response
    updatePack: () => void;
    addPack: () => void;
  };
  children?: any;
};
