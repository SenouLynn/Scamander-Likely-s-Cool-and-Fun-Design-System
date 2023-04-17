import { useContext } from "react";
import { PoopDeckContext } from "../PoopDeck";
import { createLocation, seedPack } from "../helpers/helpers";

export default function Children({ pack }: { pack: ComponentPackage }) {
  const { updaters } = useContext(PoopDeckContext);

  const addSubComponent = (newSubComponent: ComponentPackage) => {
    const subComponents = [...pack.subComponents, newSubComponent];
    updaters.field(newSubComponent, { ...pack, subComponents });
  };

  return (
    <div>
      <button
        onClick={() =>
          addSubComponent(seedPack({ location: createLocation(pack) }))
        }
      >
        Add New Component
      </button>
    </div>
  );
}
