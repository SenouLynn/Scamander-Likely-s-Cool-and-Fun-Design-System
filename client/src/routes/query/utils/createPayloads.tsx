export const packComponentsForDb = (components: {
  [key: string]: ComponentPackage;
}): ComponentPayloadShapeSet => {
  const payload: ComponentPayloadShapeSet = {};
  Object.entries(components).forEach(([key, component]) => {
    payload[key] = {
      key: `field.${key}`,
      value: component,
    };
  });

  return payload;
};
