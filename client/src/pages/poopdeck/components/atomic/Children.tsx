import { useContext } from "react";
import { Icon } from "../../../../_components/icons/_icon.manifest";
import { buildPack, createLocation, seedPack } from "../../utils/create";
import { PoopDeckContext } from "../../utils/context";
import SelectComponent from "./SelectComponent";
import { summonComponents } from "../../utils/organizers";

export default function Children({ pack }: { pack: ComponentPackage }) {
  const { field, update, focused } = useContext(PoopDeckContext);

  const addSubComponent = (newSubComponent: ComponentPackage) => {
    const child = buildPack({
      pack: { ...newSubComponent, location: createLocation(pack) },
    });
    const subComponents = [...focused.subComponents, child];
    console.log(pack.location, newSubComponent.location, field);
    update.field(child, { ...focused, subComponents });
  };

  return (
    <div className="flex-end-center">
      <SelectComponent
        label={"Components: "}
        onChange={(v) => {
          console.log(v);
          addSubComponent(v);
        }}
        getSet={() => Object.values(summonComponents(field))}
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
