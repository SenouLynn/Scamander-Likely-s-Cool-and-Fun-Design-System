import { useContext } from "react";
import { PoopDeckContext } from "../context";
import { createLocation, seedPack } from "../helpers/helpers";
import { SelectPackType } from "./SelectComponent";
import { SelectType } from "./SelectType";
import { SelectElementType } from "./SelectElement";

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
        New Component
      </button>
    </div>
  );
}
