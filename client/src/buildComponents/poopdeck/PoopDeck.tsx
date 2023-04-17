import React from "react";
import { createComponentPackage } from "../../components/theme/utils/helpers";
import ManageComponent from "./ManageComponent";
import Display from "./components/Display";
import { seedPack } from "./helpers/helpers";
import { useComponentManager } from "./helpers/hooks";

export default function PoopDeck() {
  const state = useComponentManager(
    createComponentPackage({
      pack: seedPack({ location: "0", type: "component" }),
    })
  );

  return (
    <PoopDeckContext.Provider value={state}>
      <div className="w-100 w-max-100vh h-100 h-max-100vh flex-center-start flex-column ">
        <Display />
        <div>
          <ManageComponent location={state.pack.location} />
        </div>
      </div>
    </PoopDeckContext.Provider>
  );
}

export const PoopDeckContext = React.createContext<ComponentManager>({
  original: {},
  pack: {},
  updaters: {
    masterPack: (p: ComponentPackage) => {},
    field: (p: ComponentPackage) => {},
    saveLocal: () => {},
    saveDb: () => {},
    updateFocus: () => {},
  },
  field: {},
});
