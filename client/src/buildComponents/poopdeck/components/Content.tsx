import { useContext } from "react";
import { PoopDeckContext } from "../context";
import { Input } from "./Input";

export default function Content({ pack }: { pack: ComponentPackage }) {
  const { updaters } = useContext(PoopDeckContext);
  const handleChildren = (value: string) => {
    let newPack = { ...pack };
    newPack.children = [value];
    updaters.field(newPack);
  };

  const handleClassName = (value: string) => {
    let newPack = { ...pack };
    newPack.styles.className = value;
    updaters.field(newPack);
  };

  return (
    <div className="w-100 flex-start-center">
      <Input label="Text" value={pack.children[0]} onChange={handleChildren} />
      <Input
        label="Class"
        value={pack.styles.className || ""}
        onChange={handleClassName}
      />
    </div>
  );
}
