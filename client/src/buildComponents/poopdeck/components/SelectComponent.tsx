import { useContext } from "react";
import { createComponentPackage } from "../../../_components/_theme/utils/helpers";
import { ThemeContext } from "../../../_components/theme_2.0/ThemeProvider";

export const SelectPackType = (props: {
  onChange: (p: ComponentPackage) => void;
  type: "page" | "component" | "section" | "all";
  label?: string;
}) => {
  const { themeField } = useContext(ThemeContext);

  const handleChange = (pack: ComponentPackage) => {
    props.onChange(pack);
  };
  let elements = [];
  if (props.type === "all") {
    elements = Object.values(themeField).filter(
      (pack) => pack.location.split("-").length === 1
    );
  } else {
    elements = Object.values(themeField).filter(
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
          if (themeField[val])
            handleChange(
              createComponentPackage({
                props: {},
                pack: themeField[e.target.value],
              })
            );
        } else {
          console.warn(`Could not find component ${val} in theme`);
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
