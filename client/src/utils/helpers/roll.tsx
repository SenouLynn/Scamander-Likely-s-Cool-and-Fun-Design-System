export const roll = (array: any[]) => {
  const obj: searchable = {};
  array.forEach((item: ComponentPackage) => {
    obj[item.componentId] = 0;
  });
  return obj;
};

export const unroll = (obj: searchable) => {
  return Object.values(obj);
};
