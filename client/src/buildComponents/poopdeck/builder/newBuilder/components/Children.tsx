import React, { useContext } from "react";
import { PoopDeckContext } from "../NewPoopDeck";
import { createLocation, seedPack } from "../../utils/helpers";

export default function Children({ pack }: { pack: ComponentPackage }) {
  const { updaters } = useContext(PoopDeckContext);

  const addSubComponent = (newSubComponent: ComponentPackage) => {
    updaters.field(newSubComponent, pack);
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
