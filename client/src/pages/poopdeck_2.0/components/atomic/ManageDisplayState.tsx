import React, { useContext } from "react";
import { updateZoomLevel } from "../../utils/updaters";
import { PoopDeckContext } from "../../utils/context";
import { Icon } from "../../../../_components/icons/_icon.manifest";
import { createDisplayState } from "pages/poopdeck_2.0/utils/create";

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
          update.displayState(
            createDisplayState({ canvas: e.target.value as any })
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
      <span className="padding-xsm" onClick={() => handleZoom("add")}>
        <Icon icon="ZoomIn" />
      </span>
      <span className="padding-xsm" onClick={() => handleZoom("sub")}>
        <Icon icon="ZoomOut" />
      </span>
    </div>
  );
}