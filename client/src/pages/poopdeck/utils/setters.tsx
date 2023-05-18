import { useContext } from "react";
import { ThemeContext } from "../../../_components/theme/ThemeProvider";
import { buildPack, createLocation } from "./create";
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
      // const field = cleanField(props.field);
      // const pack = cleanPack(p);
      console.log(assembleComponentSave(p, props.field));

      saveComponentToDb({
        field: assembleComponentSave(p, props.field),
        pack: p,
      });
      return {
        pack: p,
        field: props.field,
      };
    },
  };

  return setter;
};

export const assembleComponentSave = (
  component: ComponentPackage,
  field: ComponentPackageSet
) => {
  const { location } = component;
  const payload: ComponentPackageSet = {};
  const parse = (
    pack: ComponentPackage,
    field: ComponentPackageSet,
    index?: number
  ) => {
    if (location.includes("seedComponent")) {
      if (location === "seedComponent") {
        const newLocation = createLocation({});
        const p = field["seedComponent"];
        payload[newLocation] = { ...p, location: newLocation };
      }
    } else {
      const p = field[location];

      payload[location] = { ...p, location };

      pack.subComponents.forEach((child, i) => {
        const l: string = child.location.toString();
        payload[l] = buildPack({
          pack: {
            ...field[l],
            location: `${location}-${i}`,
          },
        });
      });
    }
  };
  parse(component, field);
  return payload;
};
