import { buildPack } from "pages/poopdeck/utils/create";
import { mergeFields } from "../../../../pages/poopdeck/utils/helpers";

export const setters = (
  theme: AtLeast<ThemeProps, "themeField">,
  setField: any
) => {
  return {
    field: (component: ComponentPackage) => {
      const newComponentList = { ...theme.themeField };
      const addComponent = (p: ComponentPackage) => {
        newComponentList[p.location] = p;

        p.subComponents?.forEach((subComponent) => {
          subComponent && addComponent(buildPack({ pack: subComponent }));
        });
        return newComponentList;
      };
      //Run recursive function
      addComponent(component);
      setField(newComponentList);
    },

    fieldList: (list: ComponentPackageSet) => {
      const mergedField = mergeFields(list, theme.themeField);
      setField(mergedField);
    },
    deletePack: (pack: ComponentPackage) => {
      const newField = { ...theme.themeField };
      delete newField[pack.location];

      setField(newField);
    },
  };
};
