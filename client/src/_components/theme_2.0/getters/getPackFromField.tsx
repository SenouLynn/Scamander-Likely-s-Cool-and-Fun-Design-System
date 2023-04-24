
export const getPackFromField = (
  packId: { location: string; componentId?: string | null },
  field: ComponentPackageSet
) => {
  let relativeComponent = field[packId.location];
  let reusedComponentStyles = {};

  //if locational component calls another component
  if (relativeComponent.componentId) {
    reusedComponentStyles = field[relativeComponent.componentId]?.styles;
  }
  //if trying to add component externally
  if (packId.componentId) {
    reusedComponentStyles = field[packId.componentId]?.styles;
  }

  const pack = {
    ...relativeComponent,
    styles: {
      ...relativeComponent.styles,
      ...reusedComponentStyles,
    },
  };
  return pack;
};
