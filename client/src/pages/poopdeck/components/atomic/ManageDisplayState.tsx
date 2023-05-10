import { Icon } from "../../../../_components/icons/_icon.manifest";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { createDisplayState } from "pages/poopdeck/utils/create";
import { PoopDeckContext } from "../../utils/context";
import { updateZoomLevel } from "../../utils/updaters";

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
      <Link to="/bilgedeck">
        <span className="padding-xsm">
          <Icon icon="ListUl" />
        </span>
      </Link>
    </div>
  );
}
