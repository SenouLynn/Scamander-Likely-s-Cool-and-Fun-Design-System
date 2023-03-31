import { useContext, useState } from "react";
import { createComponentPackage } from "../../../../components/theme/utils/helpers";
import { PoopDeckContext } from "../ManageComponent";
import { SelectComponent } from "./SelectComponent";

export default function Titlebar() {
  const { setMasterComponent } = useContext(PoopDeckContext);
  const [toggleComponentSelect, setToggleComponentSelect] = useState(false);

  return (
    <div className="padding-sm">
      <h1>Build Components</h1>
      <div className="flex-end-center">
        <button
          onClick={() =>
            setMasterComponent(
              createComponentPackage({ pack: { label: "New Component" } })
            )
          }
        >
          Build new Component
        </button>
        {toggleComponentSelect ? (
          <SelectComponent
            onChange={(pack: ComponentPackage) => setMasterComponent(pack)}
          />
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
