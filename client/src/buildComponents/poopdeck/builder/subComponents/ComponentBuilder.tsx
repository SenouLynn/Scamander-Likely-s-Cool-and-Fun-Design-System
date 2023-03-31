import { useState } from "react";
import ComponentMetaData from "./ComponentMetaData";
import ComponentStyles from "./ComponentStyles";
import SaveComponent from "./SaveComponent";
import SubComponents from "./SubComponents";

export default function ComponentBuilder(props: ComponentBuilderProps) {
  const [display, setDisplay] = useState<string | null>(null);

  const handleChildren = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updatePack({
      ...props.pack,
      children: [e.target.value],
    });
  };
  return (
    <div className="padding-md border">
      <div className="flex-between-center">
        <h4>{props.pack.label}</h4>
        <span className="flex-end-center">
          <button onClick={() => setDisplay("styles")}>Styles</button>
          <button onClick={() => setDisplay("subComponents")}>
            SubComponents
          </button>
        </span>
      </div>
      <ComponentMetaData {...props} />
      <div className="border padding-md grid-col-2">
        <span>
          <label htmlFor="className">ClassName</label>
          <input
            type="text"
            className="w-100"
            value={props.pack.styles.className}
            onChange={(e) =>
              props.updatePack({
                ...props.pack,
                styles: { ...props.pack.styles, className: e.target.value },
              })
            }
          />
        </span>
        <span>
          <label htmlFor="children">Text</label>
          <input
            type="text"
            name="className"
            // value={children[0] || ""}
            className="w-100"
            onChange={handleChildren}
          />
        </span>
      </div>

      {display === "styles" && <ComponentStyles {...props} />}
      {display === "subComponents" && <SubComponents {...props} />}
      <SaveComponent {...props} />
    </div>
  );
}
