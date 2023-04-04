import { createContext, useMemo } from "react";
import { createComponentPackage } from "../../../components/theme/utils/helpers";
import ManageComponent from "./ManageComponent";
import DisplayComponent from "./subComponents/DisplayComponent";
import Titlebar from "./subComponents/Titlebar";
import { useComponentManager } from "./utils/hooks";
import { seedPack } from "./utils/helpers";

export default function PoopDeck({ pack }: { pack?: ComponentPackage }) {
  const contextProps = useComponentManager(seedPack());
  const { packField, updatePack } = contextProps;
  
  return (
    <PoopDeckContext.Provider value={contextProps}>
      <div className="h-min-100vh h-100 w-min-100vw w-100">
        <div className="display-flex flex-row h-100 flex-gap-1">
          <div className="flex-grow-1 w-max-40vw padding-md">
            <Titlebar {...contextProps} />

            <ManageComponent
              pack={packField["0"]}
              updatePack={updatePack}
              packField={packField}
              Context={PoopDeckContext}
            />
          </div>
          <div className="flex-grow-2 w-max-60 ">
            <DisplayComponent
              pack={useMemo(() => packField["0"], [packField["0"]])}
              updatePack={updatePack}
              packField={{}}
              Context={PoopDeckContext}
            />
          </div>
        </div>
      </div>
    </PoopDeckContext.Provider>
  );
}

export const PoopDeckContext = createContext<PoopDeckContextType>({
  pack: createComponentPackage({ pack: seedPack() }),
  packField: {},
  updatePack: {
    self: {
      updatePack: () => null,
      updateChild: () => null,
    },
    parent: {
      updatePack: () => null,
      updateChild: () => null,
    },
  },
  Context: null,
});

type PoopDeckContextType = ComponentBuilderProps;
