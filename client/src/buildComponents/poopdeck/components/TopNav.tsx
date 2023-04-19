import { useContext } from "react";
import { PoopDeckContext } from "../context";
import {
  createDisplayState,
  createLocation,
  seedPack,
} from "../helpers/helpers";
import Save from "./Save";
import { SelectPackType } from "./SelectComponent";
import { updateZoomLevel } from "../helpers/displayState";
import ManageDisplayState from "./ManageDisplayState";

export default function TopNav() {
  const { displayState, updaters } = useContext(PoopDeckContext);

  const handleZoom = (val: "add" | "sub") => {
    let zoomLevel = updateZoomLevel(val, displayState.zoomLevel);
    updaters.updateDisplayState(createDisplayState({ zoomLevel }));
  };
  return (
    <nav className="w-max-100vw w-100 flex-between-center manage-component-nav">
      <div className=" flex-nowrap w-100 flex-start-center">
        <button
          onClick={() => {
            console.log(createLocation({}));
            updaters.updateFocus(
              seedPack({ type: "component", location: createLocation({}) })
            );
          }}
        >
          New Component
        </button>

        <SelectPackType
          type="component"
          onChange={(v) => {
            console.log(v);
            updaters.updateFocus(v);
          }}
        />
        {/* <SelectPackType type="page" onChange={(v) => updaters.updateFocus(v)} /> */}
        <SelectPackType type="all" onChange={(v) => updaters.updateFocus(v)} />
        <Save />
      </div>

      <ManageDisplayState />
    </nav>
  );
}
