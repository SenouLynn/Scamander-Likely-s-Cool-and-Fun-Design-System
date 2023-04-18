import elementTypes from "../../../components/theme/declarations/_elements.manifest";
import { createComponentPackage } from "../../../components/theme/utils/helpers";

export const SelectElementType = (props: {
  onChange: (p: ComponentPackage) => void;
  type: HTMLElement;
}) => {
  const handleChange = (pack: ComponentPackage) => {
    props.onChange(pack);
  };

  const elements = Object.values(elementTypes).filter(
    (pack) => pack.id === props.role || props.id === "all"
  );
  return (
    <select
      id="selectElement"
      value=""
      onChange={(e) => {
        const val = e.target.value;
        if (val !== "choose ") {
          if (elementTypes[val])
            handleChange(
              createComponentPackage({
                props: {},
                pack: elementTypes[e.target.value],
              })
            );
        } else {
          console.warn(`Could not find component ${val} in elementTypes`);
        }
      }}
    >
      <option value="choose">Choose Element:</option>
      {elements.map((component) => {
        return (
          <option key={component.id} value={component.id}>
            {component.label}
          </option>
        );
      })}
    </select>
  );
};
