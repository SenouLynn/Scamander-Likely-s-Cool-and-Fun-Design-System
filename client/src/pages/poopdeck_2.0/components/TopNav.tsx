import { useContext } from "react";
import { PoopDeckContext } from "../utils/context";
import { summonComponents } from "../utils/organizers";
import Save from "./atomic/Save";
import SelectComponent from "./atomic/SelectComponent";
import { ThemeContext } from "../../../_components/theme_2.0/ThemeProvider";
import ManageDisplayState from "./atomic/ManageDisplayState";
import { createLocation, seedPack } from "../utils/create";

export default function TopNav() {
  const { themeField } = useContext(ThemeContext);
  const { displayState, update, field } = useContext(PoopDeckContext);


  return (
    <nav className="w-max-100vw w-100 flex-between-center manage-component-nav">
      <div className=" flex-nowrap w-100 flex-start-center">
        <button
          onClick={() => {
            update.pack(
              seedPack({ type: "component", location: createLocation({}) })
            );
          }}
        >
          New Component
        </button>
        <SelectComponent
          label={"Components: "}
          onChange={(p) => console.log(p)}
          getSet={() => Object.values(summonComponents(field))}
        />

        <SelectComponent
          label="All: "
          onChange={(p) => console.log(p)}
          getSet={() => Object.values(themeField)}
        />
        <Save />
      </div>

      <ManageDisplayState />
    </nav>
  );
}
