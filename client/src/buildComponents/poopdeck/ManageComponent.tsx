import { useContext } from "react";
import Builder from "./components/Builder";
import { PoopDeckContext } from "./PoopDeck";
import { createComponentPackage } from "../../components/theme/utils/helpers";
import { createLocation, seedPack } from "./helpers/helpers";
import Save from "./components/Save";
import { SelectPackType } from "./components/SelectComponent";

export default function ManageComponent({ location }: { location: any }) {
  const { field, updaters } = useContext(PoopDeckContext);
  const component = field[location];
  const subComponents = component.subComponents || [];

  return (
    <div className="padding-sm">
      <nav className="w-max-100vw w-100 flex-start-center">
        <button
          onClick={() => {
            console.log(createLocation({}));
            updaters.updateFocus(
              seedPack({ type: "component", location: createLocation({}) })
            );
          }}
        >
          New Component
        </button>
        <button onClick={() => updaters.field(seedPack({ type: "section" }))}>
          New Section
        </button>
        <button onClick={() => updaters.field(seedPack({ type: "page" }))}>
          New Page
        </button>
        <SelectPackType
          type="component"
          onChange={(v) => {
            console.log(v);
            updaters.updateFocus(v);
          }}
        />
        <SelectPackType type="page" onChange={(v) => updaters.updateFocus(v)} />
        <SelectPackType type="all" onChange={(v) => updaters.updateFocus(v)} />
        <Save />
      </nav>
      <div className="w-max-25rem">
        <Builder pack={component} />
      </div>
      <div className="flex-row flex-start-start w-100vw overflow-auto">
        {subComponents.map((subComponent) => {
          const location = subComponent.location || "none";
          const component = field[location];
          if (!component) {
            console.warn(`Could not find component ${location}`);
            return null;
          }
          return (
            <Builder
              key={subComponent.location}
              pack={createComponentPackage({ pack: subComponent })}
            />
          );
        })}
      </div>
    </div>
  );
}
