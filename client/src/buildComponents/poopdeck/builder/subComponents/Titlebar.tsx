import { useContext, useState } from "react";
import { PoopDeckContext } from "../PoopDeck";
import { seedPack } from "../utils/helpers";
import { SelectComponent } from "./SelectComponent";

export default function Titlebar(props: ComponentBuilderProps) {
  const { updatePack } = useContext(PoopDeckContext);
  const [toggleComponentSelect, setToggleComponentSelect] = useState(false);

  return (
    <div className="padding-sm">
      <h1>Build Components</h1>
      <div className="flex-end-center">
        <button onClick={() => updatePack.self.updatePack(seedPack())}>
          Build new Component
        </button>
        {toggleComponentSelect ? (
          <SelectComponent onChange={updatePack.self.updatePack} />
        ) : (
          <button
            onClick={() => setToggleComponentSelect(!toggleComponentSelect)}
          >
            Import Component
          </button>
        )}
      </div>
    </div>
  );
}
