export const updateComponentsPayload = (components: {
  [key: string]: ComponentPackage;
}): ComponentPayloadShapeSet => {
  const payload: ComponentPayloadShapeSet = {};
  Object.entries(components).forEach(([key, component]) => {
    payload[key] = {
      key: `components.${key}`,
      value: component,
    };
  })
  return payload;
};


