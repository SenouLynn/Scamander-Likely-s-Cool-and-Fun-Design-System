import { createContext, useEffect, useState } from "react";
import { createComponentPackage } from "../../../components/theme/utils/helpers";
import ComponentBuilder from "./subComponents/ComponentBuilder";
import DisplayComponent from "./subComponents/DisplayComponent";
import Titlebar from "./subComponents/Titlebar";
import { useComponentManager } from "./utils/hooks";

export default function ManageComponent() {
  const seedPackage = createComponentPackage({
    pack: {
      componentId: "new_component_1",
      label: "New Component",
    },
  });
  const value = useComponentManager(seedPackage);

  const [componentPackage, setComponentPackage] = useState(
    value.masterComponent
  );

  useEffect(() => {
    setComponentPackage(
      createComponentPackage({ pack: value.masterComponent })
    );
  }, [value.masterComponent]);

  return (
    <PoopDeckContext.Provider value={value}>
      <div className="h-min-100vh h-100 w-min-100vw w-100">
        <div className="display-flex flex-row h-100 flex-gap-1">
          <div className="flex-grow-1 w-max-40vw padding-md">
            <Titlebar />
            <ComponentBuilder
              pack={componentPackage}
              updatePack={setComponentPackage}
            />
          </div>
          <div className="flex-grow-2 w-max-60 ">
            <DisplayComponent pack={componentPackage} updatePack={() => null} />
          </div>
        </div>
      </div>
    </PoopDeckContext.Provider>
  );
}

export const PoopDeckContext = createContext<PoopDeckContextType>({
  setMasterComponent: (pack: ComponentPackage) => null,
  masterComponent: createComponentPackage({ pack: {} }),
});

type PoopDeckContextType = {
  setMasterComponent: (pack: ComponentPackage) => void;
  masterComponent: ComponentPackage;
};
