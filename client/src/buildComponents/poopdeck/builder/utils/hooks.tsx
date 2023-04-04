import { useContext, useState } from "react";
import { ThemeContext } from "../../../../components/theme/ThemeContext";
import { PoopDeckContext } from "../PoopDeck";
import { createAsteroidBelt } from "./helpers";

//<--- HIGHLY LOAD BEARIING --->//
export const useComponentManager = (
  pack: ComponentPackage
): ComponentBuilderProps => {
  //<--- Access to theme --->//
  const { componentList } = useContext(ThemeContext);

  //<--- Seed Component --->//
  const [component, setComponent] = useState<ComponentPackage>({
    ...pack,
  });

  //<--- Built Objects Basket --->//
  const [localField, setLocalField] = useState<PackField>(
    createAsteroidBelt(component, componentList)
  );

  //<--- Update Master Component --->//
  const updatePack = {
    self: {
      updatePack: (child: ComponentPackage, parent?: ComponentPackage) => {
        setComponent(child);
        updatePack.field?.updateChild(child);
        parent && updatePack.field?.updateChild(parent);
      },
      updateChild: (p: ComponentPackage) => {
      },
    },
    //Update Parent
    parent: {
      updatePack: (p: ComponentPackage) => {
        // setComponent(p);
      },
      updateChild: (p: ComponentPackage) => {
        //Merge current pack with new subComponent slotted into subComponent
        console.log("Trying to update parents's child");
      },
    },
    field: {
      updatePack: (p: ComponentPackage) => {},
      updateChild: (p: ComponentPackage, parent?: ComponentPackage) => {
        let field = { ...localField };
        field[p.location] = p;
        if (parent) field[parent.location] = parent;
        // console.log("field", p, parent, field);
        setLocalField(field);
      },
    },
  };

  return {
    pack: component,
    updatePack,
    packField: localField,
    Context: PoopDeckContext,
  };
};
