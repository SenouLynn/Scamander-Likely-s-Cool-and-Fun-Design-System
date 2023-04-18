import React from "react";

import { createComponentPackage } from "../../components/theme/utils/helpers";
import { seedPack } from "./helpers/helpers";
import { useComponentManager } from "./helpers/hooks";

import Display from "./components/Display";
import ZoomWrapper from "./components/ZoomWrapper";
import ManageDisplayState from "./ManageDisplayState";
import ManageComponent from "./ManageComponent";
import { useHotKey } from "../../utils/hooks/hotkeys";

const MGMTElectricFeel = (props: any) => {
  return (
    <>
      {" "}
      <div className=" flex-start-center flex-row">
        <div className="manage-component-wrapper bg-color-light">
          {props.children}
        </div>
      </div>
    </>
  );
};
export default function PoopDeck() {
  const state = useComponentManager(
    createComponentPackage({
      pack: seedPack({ location: "0", type: "component" }),
    })
  );
  useHotKey("ctrl+n", () =>
    state.updaters.masterPack(seedPack({ location: "0", type: "component" }))
  );

  return (
    <PoopDeckContext.Provider value={state}>
      <ZoomWrapper>
        <div className="w-100  h-100 flex-center-center flex-column dev-bg-color-primary">
          <Display />
        </div>
        <div>
          <MGMTElectricFeel>
            <ManageDisplayState />
            <ManageComponent location={state.pack.location} />
          </MGMTElectricFeel>
        </div>
      </ZoomWrapper>
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
    updateDisplayState: () => {},
  },
  field: {},
  setDisplayState: () => {},
  displayState: {
    zoomLevel: 1,
  },
});
