import { createComponentPackage } from "../../components/theme/utils/helpers";
import { seedPack } from "./helpers/helpers";
import { useComponentManager } from "./helpers/hooks";

import Display from "./components/Display";
import ManageComponent from "./components/ManageComponent";
import ManageDisplayState from "./components/ManageDisplayState";
import ZoomWrapper from "./components/ZoomWrapper";
import { usePoopDeckHotKeys } from "./helpers/hooks";
import { PoopDeckContext } from "./context";
import TopNav from "./components/TopNav";
export default function PoopDeck() {
  //Global State
  const state = useComponentManager(
    createComponentPackage({
      pack: seedPack({ location: "0", type: "component" }),
    })
  );

  return (
    <PoopDeckContext.Provider value={state}>
      <ZoomWrapper>
        <div className="w-100  h-100 flex-center-center flex-column dev-bg-color-primary">
          <Display />
        </div>
        <TopNav />
        <div>
          <MGMTElectricFeel>
            <ManageComponent location={state.pack.location} />
          </MGMTElectricFeel>
        </div>
      </ZoomWrapper>
    </PoopDeckContext.Provider>
  );
}

//First consumer of PoopDeckContext
const MGMTElectricFeel = (props: any) => {
  //Hotkeys
  usePoopDeckHotKeys();
  return (
    <>
      {" "}
      x
      <div className=" flex-start-center flex-row">
        <div className="manage-component-wrapper bg-color-light">
          {props.children}
        </div>
      </div>
    </>
  );
};
