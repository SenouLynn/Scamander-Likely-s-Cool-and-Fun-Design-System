import React from "react";
import { SelectComponent } from "./SelectComponent";
import { createComponentPackage } from "../../../../components/theme/utils/helpers";

export default function SubComponents(props: ComponentBuilderProps) {
  const updateSubComponents = (pack: ComponentPackage) => {
    const newSubComponents = [...props.pack.subComponents, pack];
    props.updatePack({
      ...props.pack,
      subComponents: newSubComponents,
    });
  };
  return (
    <div>
      <SelectComponent {...props} onChange={updateSubComponents} />
      <div>
        <h5>Children</h5>
        <div>
          {props.pack.subComponents.map((pack, i) => {
            const p = createComponentPackage({ props: {}, pack });

            return (
              <div key={i} className="border padding-sm w-fit-content">
                <p>{p.label}</p>
                <button
                  onClick={() => {
                    const newSubComponents = [...props.pack.subComponents];
                    newSubComponents.splice(i, 1);
                    props.updatePack({
                      ...props.pack,
                      subComponents: newSubComponents,
                    });
                  }}
                >
                  Remove
                </button>
                <button>focus</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
