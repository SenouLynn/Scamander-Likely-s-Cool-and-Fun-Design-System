import { useContext } from "react";
import { PoopDeckContext } from "../context";
import { createLocation, seedPack } from "../utils/helpers";
import { SelectPackType } from "./SelectComponent";
import { Icon } from "../../../_components/icons/_icon.manifest";

export default function Children({ pack }: { pack: ComponentPackage }) {
  const { updaters } = useContext(PoopDeckContext);

  const addSubComponent = (newSubComponent: ComponentPackage) => {
    const subComponents = [...pack.subComponents, newSubComponent];
    updaters.field(newSubComponent, { ...pack, subComponents });
  };

  return (
    <div className="flex-end-center">
      <SelectPackType
        type="component"
        label={`Add Subcomponent`}
        onChange={(v) => {
          console.log(v);
          addSubComponent(v);
        }}
      />
      <div
        className="flex-center-center"
        onClick={() =>
          addSubComponent(seedPack({ location: createLocation(pack) }))
        }
      >
        <Icon icon={"ListPlus"} />
      </div>
    </div>
  );
}
