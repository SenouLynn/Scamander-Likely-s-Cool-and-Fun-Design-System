import { useContext, useState } from "react";
import { ThemeContext } from "../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../components/theme/utils/helpers";
export default function AddChild(props: ComponentPackage) {
  const { componentList, setOpenComponents, updateSubComponents } =
    useContext(ThemeContext);

  const updateComponent = (childId: string) => {
    let currentComponent = props;
    const child = componentList[childId];
    const childPackage = createComponentPackage({
      props,
      pack: { ...child, styles: { className: "" } },
    });

    // updateSubComponents({
    //   id: currentComponent.componentId,
    //   type: "custom",
    //   subComponents: [...currentComponent.subComponents, childPackage],
    // });
  };

  return (
    <div className="w-20rem h-fit-content border padding-md">
      <h4>Add a Sub-Component</h4>
      <select onChange={(e) => updateComponent(e.target.value)}>
        {Object.values(componentList).map((component) => {
          return (
            <option key={component.componentId} value={component.componentId}>
              {component.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
