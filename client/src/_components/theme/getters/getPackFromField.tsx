export const getPackFromField = (
  packId: { location: string; componentId?: string | null },
  field: ComponentPackageSet
) => {
  let treeComponent = field[packId.location];
  let base = {};

  //if locational component calls another component
  if (treeComponent?.componentId) {
    base = field[treeComponent?.componentId]?.styles;
  }
  //if trying to add component externally
  if (packId?.componentId) {
    base = field[packId?.componentId]?.styles;
  }

  const pack = {
    ...treeComponent,
    styles: {
      ...treeComponent?.styles,
      ...base,
    },
  };
  return pack;
};
