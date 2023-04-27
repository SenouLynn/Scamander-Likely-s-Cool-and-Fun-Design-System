import { createComponentPackage } from "./create";


export const addComponentToField = (
  p: ComponentPackage,
  field: ComponentPackageSet,
  parent?: ComponentPackage
) => {
  let newField = { ...field };
  const addComponent = (p: ComponentPackage) => {
    newField[p.location] = p;

    p.subComponents?.forEach((subComponent) => {
      subComponent &&
        addComponent(createComponentPackage({ pack: subComponent }));
    });
    return newField;
  };
  //Run recursive function
  addComponent(p);
  if(parent) newField[parent.location] = parent;
  return newField;
};

export const mergeFields = (
  localField: ComponentPackageSet,
  themeField: ComponentPackageSet
) => {
  let newField = { ...themeField };
  Object.entries(localField).forEach(([key, val]) => {
    newField[key] = val;
  });
  return newField;
};


