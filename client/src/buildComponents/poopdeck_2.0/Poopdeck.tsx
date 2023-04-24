import React from "react";
import { PoopDeckContext } from "./utils/context";
import { usePoopDeck } from "./utils/hooks";
import { usePoopDeckHotKeys } from "../poopdeck/utils/hooks";

import ManageComponent from "./components/ManageComponent";
import ZoomWrapper from "./components/ZoomWrapper";
import TopNav from "./components/TopNav";
import Display from "./components/atomic/Display";
import { seedPack } from "./utils/create";

export default function Poopdeck() {
  const value = usePoopDeck({
    pack: seedPack({ location: "0", type: "component" }),
  });
  return (
    <PoopDeckContext.Provider value={value}>
      <ZoomWrapper>
        <div className="w-100  h-100 flex-center-center flex-column dev-bg-color-primary">
          <Display />
        </div>
        <TopNav />

        <div>
          <MGMTElectricFeel>
            <ManageComponent location={value.pack.location} />
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
