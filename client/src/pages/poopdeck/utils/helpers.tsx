import { buildPack, createLocalField, createLocation } from "./create";

export const addComponentToField = (
  p: ComponentPackage,
  field: ComponentPackageSet,
  parent?: ComponentPackage
) => {
  let newField = { ...field };
  const addComponent = (p: ComponentPackage) => {
    newField[p.location] = p;

    p.subComponents?.forEach((subComponent) => {
      subComponent && addComponent(buildPack({ pack: subComponent }));
    });
    return newField;
  };
  //Run recursive function
  addComponent(p);
  if (parent) newField[parent.location] = parent;
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

export const cleanPack = (pack: ComponentPackage): ComponentPackage => {
  const isSeed = pack.location === "seedComponent";
  return isSeed ? cleanLocation(pack) : pack;
};
export const cleanLocation = (pack: ComponentPackage): ComponentPackage => {
  const cleanPack = (p: ComponentPackage) => {
    let newPack: ComponentPackage = {
      ...p,
      subComponents: [],
      location:
        p.location === "seedComponent" ? createLocation({}) : p.location,
    };

    newPack.subComponents = p.subComponents?.map((sub) => {
      return (
        sub &&
        cleanPack(
          buildPack({ pack: { ...sub, location: createLocation(newPack) } })
        )
      );
    });

    return newPack;
  };

  return cleanPack(pack);
};

export const cleanField = (field: ComponentPackageSet): ComponentPackageSet => {
  const arr = Object.entries(field);
  return arr.reduce((acc: ComponentPackageSet, [key, value]) => {
    const p = acc;
    if (!key.includes("seedComponent")) {
      p[key] = value;
    }
    return p;
  }, {});
};
