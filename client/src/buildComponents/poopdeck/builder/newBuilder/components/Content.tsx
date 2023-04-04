import React, { useContext } from "react";
import { Input } from "./Input";
import { PoopDeckContext } from "../NewPoopDeck";

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
      <Input
        label="Class"
        value={pack.styles.className || ""}
        onChange={handleClassName}
      />
      <Input label="Text" value={pack.children[0]} onChange={handleChildren} />
    </div>
  );
}
