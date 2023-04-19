import React, { useContext } from "react";
import { PoopDeckContext } from "../context";
import { createDisplayState } from "../helpers/helpers";
import { updateZoomLevel } from "../helpers/displayState";

export default function ManageDisplayState() {
  const { displayState, updaters } = useContext(PoopDeckContext);

  const handleZoom = (val: "add" | "sub") => {
    let zoomLevel = updateZoomLevel(val, displayState.zoomLevel);
    updaters.updateDisplayState(createDisplayState({ zoomLevel }));
  };

  return (
    <div className=" flex-end-center flex-nowrap">
      <select
        onChange={(e) =>
          updaters.updateDisplayState(
            createDisplayState({ canvas: e.target.value })
          )
        }
      >
        <option>Boundary: </option>
        <option value="viewport">Page</option>
        <option value="fit-content">Fit Content</option>
        <option value="desktop">Desktop Screen</option>
        <option value="phone">Phone Screen</option>
        <option value="monitor">Monitor Screen</option>
      </select>
      <button className="padding-xsm" onClick={() => handleZoom("add")}>
        +
      </button>
      <button className="padding-xsm" onClick={() => handleZoom("sub")}>
        -
      </button>
    </div>
  );
}
