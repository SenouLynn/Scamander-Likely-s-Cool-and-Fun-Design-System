import { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../../components/theme/ThemeContext";

import ComponentBuilder from "./subComponents/ComponentBuilder";
import { createAsteroidBelt, updateField } from "./utils/helpers";
import { PoopDeckContext } from "./PoopDeck";

//<--- HIGHLY LOAD BEARIING --->//
//Note: Works as data controller for ComponentBuilder
export default function ManageComponent({
  pack,
  Context,
  ...props
}: ComponentBuilderProps) {
  const { updatePack } = useContext<ComponentBuilderProps>(PoopDeckContext);
  const { componentList } = useContext(ThemeContext);

  const [component, setComponent] = useState<ComponentPackage>(
    props.packField[pack.location]
  );
  const [localField, setLocalField] = useState<PackField>(
    createAsteroidBelt(pack, componentList)
  );

  // If parent component updates, update local component
  // useEffect(() => {
  //   setLocalField(createAsteroidBelt(pack, componentList));
  //   setComponent(pack);
  // }, [pack]);

  //Combo, parent in master field needs to update with new child
  //Pack needs to mirror master field parent
  //Update local field with built children
  console.log(props.packField[pack.location]);

  const handleUpdate = {
    self: {
      updatePack: (p: ComponentPackage) => {
        setComponent(p);
        //Update self
        handleUpdate.field.updateChild(p);
        //Update self in parent field
        handleUpdate.parent.updateChild(p);
        //This will trickle down to self
      },

      updateChild: (p: ComponentPackage) => {
        let field = { ...localField };
        field[p.location] = p;

        setLocalField(field);

        const exists = component.subComponents.find((sub) => {
          return sub.location === p.location;
        });

        const newSubComponents = exists
          ? component.subComponents.map((sub) => {
              if (sub.location === p.location) {
                return p;
              }
              return sub;
            })
          : [...component.subComponents, p];

        const newPack = {
          ...component,
          subComponents: newSubComponents,
        };

        //Update current field with new chld
        handleUpdate.field.updateChild(p);
        //Update new component & self in master field
        updatePack.field?.updateChild(p, newPack);
      },
    },
    parent: {
      updatePack: (p: ComponentPackage) => {},
      updateChild: (p: ComponentPackage) => {
        //updates parent
        props.updatePack.field?.updateChild(p);
      },
    },
    field: {
      updatePack: (p: ComponentPackage) => {},
      updateChild: (p: ComponentPackage, parent?: ComponentPackage) => {
        setLocalField(updateField(p, localField));
      },
    },
  };

  return (
    <>
      <ComponentBuilder
        pack={useMemo(() => component, [component])}
        updatePack={handleUpdate}
        packField={localField}
        Context={Context}
      />
    </>
  );
}
