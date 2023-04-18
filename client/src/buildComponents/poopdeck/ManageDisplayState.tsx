import React, { useContext } from "react";
import { PoopDeckContext } from "./PoopDeck";

export default function ManageDisplayState() {
  const { displayState, updaters } = useContext(PoopDeckContext);

  const handleZoom = (val: "add" | "sub") => {
    let zoomLevel = displayState.zoomLevel;
    if (val === "add") {
      if (zoomLevel < 7) zoomLevel += 1;
    } else {
      if (zoomLevel > -7) zoomLevel -= 1;
    }
    updaters.updateDisplayState({ zoomLevel });
  };

  return (
    <div className="w-100 w-max-100vw flex-end-center padding-sm">
      <button className="padding-xsm" onClick={() => handleZoom("add")}>
        +
      </button>
      <button className="padding-xsm" onClick={() => handleZoom("sub")}>
        -
      </button>
    </div>
  );
}
