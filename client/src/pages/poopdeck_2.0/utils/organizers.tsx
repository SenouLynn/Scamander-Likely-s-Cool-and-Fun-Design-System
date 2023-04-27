export const summonComponents = (field: ComponentPackageSet)=> {
  return Object.values(field).reduce((acc: ComponentPackageSet, val) => {
    const p = acc;
    if (val.role === "component") {
      p[val.componentId] = val;
    }
    return p;
  }, {});
  
};
