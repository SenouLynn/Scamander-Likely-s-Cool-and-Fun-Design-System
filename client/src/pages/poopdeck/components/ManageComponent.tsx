import { useContext, useMemo } from "react";
import Builder from "./Builder";
import { PoopDeckContext } from "../utils/context";
import { buildPack } from "../utils/create";

export default function ManageComponent() {
  const { field, focused } = useContext(PoopDeckContext);
  const component = useMemo(() => field[focused.location], [field, focused]);
  const subComponents = component?.subComponents || [];
  return (
    <div className="padding-sm " role="component-manager">
      <div className="flex-between-start">
        <div>
          <Builder pack={component} isRoot={true} />
        </div>
        <div className="w-100 padding-sm border flex-grow-1">
          <h4>Styles</h4>
          {/* <StylesDisplay {...component} /> */}
        </div>
      </div>

      <div className="flex-row flex-start-start w-100vw overflow-auto">
        {subComponents.map((subComponent) => {
          const location = subComponent.location;
          const component = field[location];
          if (!component) {
            console.warn(`Could not find component ${location}`);
            return null;
          }
          return (
            <Builder
              key={component.location}
              pack={buildPack({ pack: component })}
            />
          );
        })}
      </div>
    </div>
  );
}
