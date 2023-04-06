import { packClassification } from "../../../components/theme/declarations/_componentClassifications.manifest";

export const SelectType = (props: {
  onChange: (p: string) => void;
  value: "page" | "component" | "section" | undefined;
}) => {
  const handleChange = (type: string) => {
    props.onChange(type);
  };

  const elements = Object.values(packClassification);

  return (
    <span className="flex-start-start flex-column">
      <label htmlFor="selectComponent">Type:</label>
      <select
        id="selectComponent"
        value={props.value}
        onChange={(e) => {
          const val = e.target.value;
          if (val !== "choose ") {
            handleChange(val);
          }
        }}
      >
        <option value="choose">Type:</option>
        {elements.map((component: ElementsObj) => {
          return (
            <option key={component.id} value={component.id}>
              {component.label}
            </option>
          );
        })}
      </select>
    </span>
  );
};
