import elementTypes from "_components/theme_2.0/declarations/_elements.manifest";

export const SelectElementType = (props: {
  onChange: (p: string) => void;
  value: string;
}) => {
  const handleChange = (pack: string) => {
    props.onChange(pack);
  };

  const elements: searchable = elementTypes;

  return (
    <span className="flex-start-center flex-column">
      <label htmlFor="selectElement">Element Type:</label>
      <select
        id="selectElement"
        value={props.value}
        onChange={(e) => {
          const val = e.target.value;
          if (val !== "choose ") {
            if (elements[val]) handleChange(elements[val].id);
          } else {
            console.warn(`Could not find component ${val} in elementTypes`);
          }
        }}
      >
        <option value="choose">Elements</option>
        {Object.values(elements as HTMLElement).map((element: ElementsObj) => {
          return (
            <option key={element.id} value={element.id}>
              {element.label}
            </option>
          );
        })}
      </select>
    </span>
  );
};
