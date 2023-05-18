import { PoopDeckContext } from "./utils/context";
import { usePoopDeck, usePoopDeckHotKeys } from "./utils/hooks";

import ManageComponent from "./components/ManageComponent";
import TopNav from "./components/TopNav";
import ZoomWrapper from "./components/ZoomWrapper";
import Display from "./components/atomic/Display";
import { seedPack } from "./utils/create";

export default function Poopdeck({ pack }: { pack?: ComponentPackage }) {
  const value = usePoopDeck({
    pack,
  });

  return (
    <div data-testid="page-poopdeck">
      <PoopDeckContext.Provider value={value}>
        <ZoomWrapper>
          <div className="w-100  h-100 flex-center-center flex-column dev-bg-color-primary">
            <Display />
          </div>
          <TopNav />

          <div>
            <MGMTElectricFeel>
              <ManageComponent />
            </MGMTElectricFeel>
          </div>
        </ZoomWrapper>
      </PoopDeckContext.Provider>
    </div>
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
