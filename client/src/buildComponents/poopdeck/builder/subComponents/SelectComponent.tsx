import { useContext } from "react";
import { ThemeContext } from "../../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../../components/theme/utils/helpers";

export const SelectComponent = (props: { onChange: (p: ComponentPackage) => void }) => {
  const { componentList } = useContext(ThemeContext);

  const handleChange = (pack: ComponentPackage) => {
    props.onChange(pack);
  };
  return (
    <select
      id="selectComponent"
      value=""
      onChange={(e) => {
        const val = e.target.value;
        if (val !== "choose " && componentList[val]) {
          handleChange(
            createComponentPackage({
              props: {},
              pack: componentList[e.target.value],
            })
          );
        }
      }}
    >
      <option value="choose">Choose Component:</option>
      {Object.values(componentList).map((component) => {
        return (
          <option key={component.componentId} value={component.componentId}>
            {component.label}
          </option>
        );
      })}
    </select>
  );
};
