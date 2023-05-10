import { buildPack } from "pages/poopdeck/utils/create";
import { useContext } from "react";
import { createStyles } from "../../../../utils/styles/createStyles";
import { PoopDeckContext } from "../../utils/context";

const createCanvasClass = (canvas: string) => {
  //Pass through to createStyles whenever you get to it
  if (canvas === "viewport") return "h-100vh w-100vw";
  if (canvas === "fit-content")
    return "w-fit-content h-fit-content  w-max-100vw h-max-100vh";
  if (canvas === "desktop") return "w-desktop h-desktop";
  if (canvas === "phone") return "w-phone h-phone";
  if (canvas === "monitor") return "w-monitor h-monitor";
};

export default function Display() {
  const { pack, displayState, field } = useContext(PoopDeckContext);
  const r = buildPack({ pack: field[pack.location] });
  const placementClass =
    pack && createStyles(r).includes("w-100") ? "w-100" : "";

  const zoomClass = "zoom-" + displayState.zoomLevel;

  const canvasClass = createCanvasClass(displayState.canvas);
  console.log("display", pack);

  return (
    <div
      id="component-builder-display"
      className={`bg-color-white ${canvasClass} ${placementClass} ${zoomClass} border `}
    >
      {r.render({
        props: {},
        pack: r,
      })}
    </div>
  );
}
