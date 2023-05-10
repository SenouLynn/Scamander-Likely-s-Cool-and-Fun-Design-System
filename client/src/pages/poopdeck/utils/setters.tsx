import { useContext } from "react";
import { ThemeContext } from "../../../_components/theme/ThemeProvider";
import { createLocation } from "./create";
import { saveComponentToDb } from "./dB";
import { cleanField, cleanPack } from "./helpers";

export const useSetter = (
  props: AtLeast<ComponentManager_New, "field" | "focused">,
  update: ComponentUpdaters
): ComponentSetters => {
  const { set } = useContext(ThemeContext);
  const setter = {
    local: (p: ComponentPackage) => {
      const field = cleanField(props.field);
      const pack = cleanPack(p);
      return { pack, field };
    },
    db: (p: ComponentPackage) => {
      setter.local(p);
      const field = cleanField(props.field);
      const pack = cleanPack(p);
      console.log(field, pack);
      saveComponentToDb({ field, pack });
      return {
        pack,
        field,
      };
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
