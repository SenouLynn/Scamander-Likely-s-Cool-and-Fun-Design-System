import { useContext, useState, useMemo } from "react";
import { PoopDeckContext } from "../context";
import Children from "./Children";
import Content from "./Content";
import Meta from "./Meta";
import Styles from "./Styles";
import { Icon } from "../../../components/icons/_icon.manifest";
export default function ComponentBuilder({
  pack,
  isRoot,
}: {
  pack: ComponentPackage;
  isRoot?: boolean;
}) {
  const { field, updaters, focusedComponent } = useContext(PoopDeckContext);
  const [display, setDisplay] = useState<string | null>(null);
  // const component = field[pack.location];
  const component = useMemo(
    () => (isRoot ? field[focusedComponent.location] : field[pack.location]),
    [focusedComponent, field, pack.location, isRoot]
  );
  return (
    <div
      className="padding-md border w-30rem bg-color-white "
      onMouseEnter={() =>
        updaters.field({
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
            onClick={() => updaters.updateFocusedState(component)}
          >
            <Icon icon={"CurrentLocation"} />
          </div>
        </span>
      </div>
      <Meta pack={component} />
      <Content pack={component} />
      {display === "styles" && <Styles pack={component} />}
    </div>
  );
}
