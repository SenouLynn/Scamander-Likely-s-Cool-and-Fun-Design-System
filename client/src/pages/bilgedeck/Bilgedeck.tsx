//Todo:
//1: Create Tabular Display
//2: Access themefield
//3: Feed mockComponents for testing
//4: Get hooks from old folder to save time
//5: Salvage backend
//6: Create routes from front to back, threading needle. Should probably test

import TabularDisplay from "./components/TabularDisplay";
import { BilgedeckContext } from "./utils/context";
import { useBilgeDeck } from "./utils/hooks";
import { Icon } from "_components/icons/_icon.manifest";

export default function Bilgedeck(props?: Partial<ThemeProps>) {
  const value = useBilgeDeck({});

  return (
    <BilgedeckContext.Provider value={value}>
      <div className="padding-md">
        <div className="flex-between-center margin-bottom-lg">
          <span className="flex-start-center">
            <span className="font-size-lg">
              <Icon icon={"Anchor"} />
            </span>
            <h1>Bilgedeck</h1>
          </span>
          <button>Add Component</button>
          <button
            onClick={() =>
              value.update.deletePack({
                location: "testing",
                componentId: "testing",
              })
            }
          >
            Test Delete
          </button>
        </div>
        <TabularDisplay />
      </div>
    </BilgedeckContext.Provider>
  );
}
