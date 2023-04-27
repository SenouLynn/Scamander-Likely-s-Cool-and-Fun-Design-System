import { useContext } from "react";
import { Icon } from "../../../../_components/icons/_icon.manifest";
import { createLocation, seedPack } from "../../utils/create";
import { PoopDeckContext } from "../../utils/context";
import SelectComponent from "./SelectComponent";
import { summonComponents } from "../../utils/organizers";
import { createComponentPackage } from "../../../../_components/_theme/utils/helpers";
// import { SelectPackType } from "./SelectComponent";

export default function Children({ pack }: { pack: ComponentPackage }) {
  const { field } = useContext(PoopDeckContext);
  const { update } = useContext(PoopDeckContext);

  const addSubComponent = (newSubComponent: ComponentPackage) => {
    const child = createComponentPackage({
      pack: { ...newSubComponent, location: createLocation(pack) },
    });
    const subComponents = [...pack.subComponents, child];
    update.field(child, { ...pack, subComponents });
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
