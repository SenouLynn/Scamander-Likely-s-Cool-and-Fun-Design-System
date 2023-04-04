import React, { useContext } from "react";
import Builder from "./components/Builder";
import Display from "./components/Display";
import { PoopDeckContext } from "./NewPoopDeck";
import { createComponentPackage } from "../../components/theme/utils/helpers";

export default function ManageComponent({ location }: { location: any }) {
  const { updaters, field } = useContext(PoopDeckContext);
  const component = field[location];
  const subComponents = component.subComponents || [];
  return (
    <div className="w-100 h-100 flex-center-center flex-row">
      <div className="flex-grow-1 w-max-40vw">
        <Builder pack={component} />
        {subComponents.map((subComponent) => (
          <Builder
            key={subComponent.location}
            pack={createComponentPackage({ pack: subComponent })}
          />
        ))}
      </div>
      <div className="flex-grow-2 flex-column flex-start-sart h-100">
        <Display />
      </div>
    </div>
  );
}
