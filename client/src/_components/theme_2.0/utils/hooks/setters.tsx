import { mergeFields } from "../../../../pages/poopdeck_2.0/utils/helpers";
import { createComponentPackage } from "../../../_theme/utils/helpers";

export const setters = (
  theme: AtLeast<ThemeProps, "themeField">,
  setField: any
) => {
  return {
    field: (component: ComponentPackage) => {
      const newComponentList = { ...theme.themeField };
      console.log(component);
      const addComponent = (p: ComponentPackage) => {
        newComponentList[p.componentId] = p;

        p.subComponents?.forEach((subComponent) => {
          subComponent &&
            addComponent(createComponentPackage({ pack: subComponent }));
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
  };
};
