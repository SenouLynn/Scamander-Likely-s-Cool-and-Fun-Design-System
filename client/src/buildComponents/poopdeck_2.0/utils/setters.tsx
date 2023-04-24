import { useContext } from "react";
import { ThemeContext } from "../../../_components/theme_2.0/ThemeProvider";
import { mergeFields } from "./helpers";
import { createLocation } from "./create";
import { saveComponentToDb } from "./dB";

export const useSetter = (
  props: AtLeast<ComponentManager_New, "field" | "pack">,
  state: { setPack: any; setField: any }
): ComponentSetters => {
  const { set, } = useContext(ThemeContext);
  const setter = {
    local: () => {
      const { validField, validPack } = cleanItemsForSave(
        props.pack,
        props.field
      );
      set.fieldList(validField);
      return { validField, validPack };
    },
    db: () => {
      const { validField, validPack } = setter.local();
      saveComponentToDb({ field: validField, pack: validPack });
    },
  };

  return setter;
};

export const cleanItemsForSave = (
  pack: ComponentPackage,
  field: ComponentPackageSet
) => {
  let validPack = pack;
  let validField = field;

  //Clean add new unique comonent id if component is fresh
  if (pack.location === "0") {
    const location = createLocation({});
    validPack = { ...pack, location, componentId: location };
    //Clean valid field values of leading 0 and replace with new location
    validField = Object.values(validField).reduce(
      (acc: ComponentPackageSet, pack: ComponentPackage) => {
        const p = acc;

        let childLocation = pack.location.split("-");
        if (childLocation[0] === "0") {
          childLocation[0] = location;
          const newLocation = childLocation.join("-");
          p[newLocation] = { ...pack, location: newLocation };
          delete p[pack.location];
        }
        return p;
      },
      validField
    );

    validField = { ...validField, [location]: validPack };
  }

  return { validPack, validField };
};
