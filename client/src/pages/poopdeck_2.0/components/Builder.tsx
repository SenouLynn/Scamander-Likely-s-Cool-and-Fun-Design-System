import { useContext, useState, useMemo } from "react";
import Children from "./atomic/Children";
import Content from "./atomic/Content";
// import Styles from "./Styles";
import Meta from "./atomic/Meta";

import { Icon } from "../../../_components/icons/_icon.manifest";
import { PoopDeckContext } from "../utils/context";

export default function ComponentBuilder({
  pack,
  isRoot,
}: {
  pack: ComponentPackage;
  isRoot?: boolean;
}) {
  const { field, update } = useContext(PoopDeckContext);
  const [display, setDisplay] = useState<string | null>(null);
  // const component = field[pack.location];
  const component = field[pack.location];
  console.log(field);
  return (
    <div
      className="padding-md border w-30rem bg-color-white "
      onMouseEnter={() =>
        update.field({
          ...component,
          styles: { ...component.styles, border: true },
        })
      }
    >
      <div className="flex-between-start">
        <h4>{component.label}</h4>
        <span className="flex-end-center w-fit-content">
          <Children pack={component} />
          <div
            className="flex-center-center w-fit-content"
            onClick={() => update.focusedPack(component)}
          >
            <Icon icon={"CurrentLocation"} />
          </div>
          {/* <div
            className="flex-center-center w-fit-content"
            onClick={() => update.deleteComponent(component)}
          >
            <Icon icon={"Trash"} />
          </div> */}
        </span>
      </div>

      <Meta pack={component} />
      <Content pack={component} />
    </div>
  );
}
