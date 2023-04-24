import React, { useContext } from "react";
import { updateZoomLevel } from "../../utils/updaters";
import { PoopDeckContext } from "../../utils/context";
import { createDisplayState } from "../../../poopdeck/utils/helpers";
import { Icon } from "../../../../_components/icons/_icon.manifest";

export default function ManageDisplayState() {
  const { displayState, update } = useContext(PoopDeckContext);

  const handleZoom = (val: "add" | "sub") => {
    let zoomLevel = updateZoomLevel(val, displayState.zoomLevel);
    update.displayState(createDisplayState({ zoomLevel }));
  };

  return (
    <div className=" flex-end-center flex-nowrap">
      <select
        onChange={(e) =>
          update.displayState(createDisplayState({ canvas: e.target.value }))
        }
      >
        <option>Boundary: </option>
        <option value="viewport">Page</option>
        <option value="fit-content">Fit Content</option>
        <option value="desktop">Desktop Screen</option>
        <option value="phone">Phone Screen</option>
        <option value="monitor">Monitor Screen</option>
      </select>
      <span className="padding-xsm" onClick={() => handleZoom("add")}>
        <Icon icon="ZoomIn" />
      </span>
      <span className="padding-xsm" onClick={() => handleZoom("sub")}>
        <Icon icon="ZoomOut" />
      </span>
    </div>
  );
}
