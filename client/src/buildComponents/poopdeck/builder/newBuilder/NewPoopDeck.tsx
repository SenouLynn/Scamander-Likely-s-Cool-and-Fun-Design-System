import React from "react";
import { createComponentPackage } from "../../../../components/theme/utils/helpers";
import { seedPack } from "../utils/helpers";
import { useComponentManager } from "./helpers/hooks";
import ManageComponent from "./ManageComponent";

export default function NewPoopDeck() {
  const state = useComponentManager(
    createComponentPackage({ pack: seedPack() })
  );

  return (
    <PoopDeckContext.Provider value={state}>
      <div className="w-100 w-max-100vh h-100 h-max-100vh flex-center-start ">
        <ManageComponent location={state.pack.location} />
      </div>
    </PoopDeckContext.Provider>
  );
}

export const PoopDeckContext = React.createContext<ComponentManager>({
  original: createComponentPackage({ pack: {} }),
  pack: createComponentPackage({ pack: {} }),
  updaters: {
    masterPack: (p: ComponentPackage) => {},
    field: (p: ComponentPackage) => {},
  },
  field: {},
});

type ComponentManager = {
  original: ComponentPackage;
  pack: ComponentPackage;
  updaters: {
    masterPack: (p: ComponentPackage, parent?: ComponentPackage) => void;
    field: (p: ComponentPackage, parent?: ComponentPackage) => void;
  };
  field: {
    [key: string]: ComponentPackage;
  };
};
