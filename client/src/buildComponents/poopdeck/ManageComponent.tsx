import { useContext } from "react";
import Builder from "./components/Builder";
import { PoopDeckContext } from "./PoopDeck";
import { createComponentPackage } from "../../components/theme/utils/helpers";
import { seedPack } from "./helpers/helpers";
import Save from "./components/Save";
import { SelectComponent } from "./components/SelectComponent";

export default function ManageComponent({ location }: { location: any }) {
  const { field, updaters } = useContext(PoopDeckContext);
  const component = field[location];
  const subComponents = component.subComponents || [];

  return (
    <div className=" flex-start-center flex-row">
      <div className="position-fixed bottom-0rem  h-20rem">
        <nav className="w-max-100vw w-100 flex-start-center">
          <button onClick={() => updaters.field(seedPack())}>
            New Component
          </button>
          <SelectComponent onChange={(v) => updaters.masterPack(v)} />
          <Save />
        </nav>
        <div className="w-max-25rem">
          <Builder pack={component} />
        </div>
        <div className="flex-row flex-start-start w-100vw overflow-auto">
          {subComponents.map((subComponent) => (
            <Builder
              key={subComponent.location}
              pack={createComponentPackage({ pack: subComponent })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
