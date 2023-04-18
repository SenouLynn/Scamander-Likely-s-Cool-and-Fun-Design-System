import { useContext } from "react";
import { PoopDeckContext } from "../PoopDeck";
import { createLocation, seedPack } from "../helpers/helpers";
import { SelectPackType } from "./SelectComponent";

export default function Children({ pack }: { pack: ComponentPackage }) {
  const { updaters } = useContext(PoopDeckContext);

  const addSubComponent = (newSubComponent: ComponentPackage) => {
    const subComponents = [...pack.subComponents, newSubComponent];
    updaters.field(newSubComponent, { ...pack, subComponents });
  };

  return (
    <div className="margin-top-sm">
      <button
        onClick={() =>
          addSubComponent(seedPack({ location: createLocation(pack) }))
        }
      >
        Add New Component
      </button>
      <SelectPackType
        type="component"
        onChange={(v) => {
          console.log(v);
          addSubComponent({ ...v, location: createLocation(pack) });
        }}
      />
    </div>
  );
}
