import { useContext, useMemo } from "react";
import { createComponentPackage } from "../../../_components/_theme/utils/helpers";
import Builder from "./Builder";
import { PoopDeckContext } from "../utils/context";

export default function ManageComponent({ location }: { location: any }) {
  const { field, focused } = useContext(PoopDeckContext);
  const component = useMemo(() => field[focused.location], [field, focused]);
  const subComponents = component?.subComponents || [];
  return (
    <div className="padding-sm ">
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
          const location = subComponent.location || "none";
          const component = field[location];
          if (!component) {
            console.warn(`Could not find component ${location}`);
            return null;
          }
          return (
            <Builder
              key={subComponent.location}
              pack={createComponentPackage({ pack: subComponent })}
            />
          );
        })}
      </div>
    </div>
  );
}
