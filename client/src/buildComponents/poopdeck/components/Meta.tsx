import { useContext } from "react";
import { Input } from "./Input";
import { PoopDeckContext } from "../context";
import { SelectType } from "./SelectType";
import { SelectElementType } from "./SelectElement";

export default function Meta(props: { pack: ComponentPackage }) {
  const { updaters, pack } = useContext(PoopDeckContext);

  const handleChange = (key: keyof ComponentPackage, value: string) => {
    let newPack: searchable = { ...props.pack };
    newPack[key] = value;
    updaters.field(newPack as ComponentPackage);
  };

  return (
    <div className="flex-between-center">
      <Input
        label="Label"
        value={props.pack.label}
        onChange={(v) => handleChange("label", v)}
      />
      {/* <Input
        label="Component ID"
        value={pack.componentId}
        onChange={(v) => handleChange("componentId", v)}
      />

      <Input
        label="Location"
        value={pack.location}
        onChange={(v) => handleChange("location", v)}
      /> */}
      <SelectType
        value={props.pack.type}
        onChange={(v) => handleChange("type", v)}
      />
      <SelectElementType
        value={props.pack.role}
        onChange={(v) => {
          const c = { ...props.pack, role: v };
          updaters.field(c);
        }}
      />
    </div>
  );
}
