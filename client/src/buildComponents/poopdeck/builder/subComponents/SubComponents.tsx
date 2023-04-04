import { useMemo, useState } from "react";
import ManageComponent from "../ManageComponent";
import { createLocation, seedPack } from "../utils/helpers";
import { SelectComponent } from "./SelectComponent";

export default function SubComponents(props: ComponentBuilderProps) {
  const [currentSubComponent, setCurrentSubComponent] =
    useState<string | null>(null);

  const component = useMemo(
    () => currentSubComponent && props.packField[currentSubComponent],
    [currentSubComponent, props.packField]
  );

  const addSubComponent = (p: ComponentPackage) => {
    //Needs to update self in parent field
    //Needs to update create child in local field
    //Needs to update parent with new child
    

    
    props.updatePack.self.updateChild({
      ...p,
      location: createLocation(props.pack),
    });
  };

  return (
    <div className="padding-md  border">
      <div>
        <button
          onClick={() =>
            addSubComponent(seedPack({ location: createLocation(props.pack) }))
          }
        >
          Add New Component
        </button>
        <SelectComponent onChange={addSubComponent} />
      </div>
      {props.pack.subComponents && props.pack.subComponents.length > 0 && (
        <div>
          <h5>Children</h5>

          <div className="flex-start-center">
            {props.pack.subComponents.map((pack, i) => {
              //Get subComponentfromlocalfield here
              const location = pack.location || "0";
              const localPack = props.packField[location];

              return (
                <div key={i} className="border padding-sm w-fit-content">
                  <span>
                    <p>{localPack.label}</p>
                    <button
                      onClick={() => {
                        const newSubComponents = [...props.pack.subComponents];
                        newSubComponents.splice(i, 1);
                        props.updatePack.self.updatePack({
                          ...props.pack,
                          subComponents: newSubComponents,
                        });
                      }}
                    >
                      Remove
                    </button>
                    <button onClick={() => setCurrentSubComponent(location)}>
                      focus
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {component && <ManageComponent {...props} pack={component} />}
    </div>
  );
}
