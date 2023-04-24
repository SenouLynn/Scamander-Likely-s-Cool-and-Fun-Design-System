import { createComponentPackage } from "../../_components/_theme/utils/helpers";
import { seedPack } from "./utils/helpers";
import { PoopDeckContext } from "./context";
import ManageComponent from "./components/ManageComponent";
import ZoomWrapper from "../poopdeck_2.0/components/ZoomWrapper";
import TopNav from "../poopdeck_2.0/components/TopNav";
import Display from "./components/Display";

import { useSessionStorage } from "../../utils/hooks/sessionStorage";
import { useComponentManager } from "./utils/hooks";
import { usePoopDeckHotKeys } from "./utils/hooks";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../_components/theme_2.0/ThemeProvider";

export default function PoopDeck() {
  const { themeField } = useContext(ThemeContext);
  const { lastKnownPack } = useSessionStorage();
  //Global State
  const state = useComponentManager(
    createComponentPackage({
      pack: seedPack(
        themeField[lastKnownPack?.componentId] || {
          location: "0",
          type: "component",
        }
      ),
    })
  );

  //Save to browser storage, defends reset on page reload
  useEffect(() => {
    sessionStorage.setItem("lastKnownPack", JSON.stringify(state.pack));
  }, [state]);

  return (
    <PoopDeckContext.Provider value={state}>
      <ZoomWrapper>
        <div className="w-100  h-100 flex-center-center flex-column dev-bg-color-primary">
          <Display />
        </div>
        <TopNav />
        <div>
          <MGMTElectricFeel>
            {/* <ManageComponent location={state.pack.location} /> */}
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
      <div className=" flex-start-center flex-row">
        <div className="manage-component-wrapper bg-color-light">
          {props.children}
        </div>
      </div>
    </>
  );
};
