import { useContext } from "react";
import { ThemeContext } from "../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../components/theme/utils/helpers";

export const SelectPackType = (props: {
  onChange: (p: ComponentPackage) => void;
  type: "page" | "component" | "section" | "all";
  label?: string;
}) => {
  const { componentList } = useContext(ThemeContext);

  const handleChange = (pack: ComponentPackage) => {
    props.onChange(pack);
  };
  let elements = [];
  if (props.type === "all") {
    elements = Object.values(componentList).filter(
      (pack) => pack.location.split("-").length === 1
    );
  } else {
    elements = Object.values(componentList).filter(
      (pack) => pack.type === props.type
    );
  }

  return (
    <select
      id="selectComponent"
      className="w-max-10rem"
      value=""
      onChange={(e) => {
        const val = e.target.value;
        if (val !== "choose ") {
          if (componentList[val])
            handleChange(
              createComponentPackage({
                props: {},
                pack: componentList[e.target.value],
              })
            );
        } else {
          console.warn(`Could not find component ${val} in componentList`);
        }
      }}
    >
      <option value="choose">{props.label || `Choose ${props.type}`}:</option>
      {elements.map((component) => {
        return (
          <option key={component.componentId} value={component.componentId}>
            {component.label}
          </option>
        );
      })}
    </select>
  );
};
