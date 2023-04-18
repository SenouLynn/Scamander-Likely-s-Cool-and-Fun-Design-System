import React, { useContext } from "react";
import { createStyles } from "../../../utils/styles/createStyles";
import { PoopDeckContext } from "../PoopDeck";
import { createComponentPackage } from "../../../components/theme/utils/helpers";

export default function Display() {
  const { pack, displayState } = useContext(PoopDeckContext);
  const r = createComponentPackage({ pack });
  const placementClass =
    pack && createStyles(r).includes("w-100") ? "w-100" : "flex-center-center";
  const zoomClass = "zoom-" + displayState.zoomLevel;
  return (
    <div
      id="component-builder-display"
      className={`h-100vh w-100vw bg-color-white ${placementClass} ${zoomClass} border `}
    >
      {r.render({
        props: {},
        pack: r,
      })}
    </div>
  );
}
