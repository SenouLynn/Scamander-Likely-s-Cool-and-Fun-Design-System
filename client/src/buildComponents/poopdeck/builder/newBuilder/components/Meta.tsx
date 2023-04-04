import { useContext } from "react";
import { PoopDeckContext } from "../NewPoopDeck";
import { Input } from "./Input";

export default function Meta({ pack }: { pack: ComponentPackage }) {
  const { updaters } = useContext(PoopDeckContext);
  
  const handleChange = (key: keyof ComponentPackage, value: string) => {
    let newPack = { ...pack };
    newPack[key] = value;
    updaters.field(newPack);
  };

  return (
    <div className="flex-between-center">
      <Input
        label="Label"
        value={pack.label}
        onChange={(v) => handleChange("label", v)}
      />
      <Input
        label="Component ID"
        value={pack.componentId}
        onChange={(v) => handleChange("componentId", v)}
      />
      <Input
        label="Location"
        value={pack.location}
        onChange={(v) => handleChange("location", v)}
      />
    </div>
  );
}

