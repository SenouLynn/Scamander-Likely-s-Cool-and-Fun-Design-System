export const componentList = (componentPackage: DbStyleObject) => {
  return {
    container: {
      defaultStyleId: "container",
      label: "Container",
      componentId: "container",
      styles: {},
    },
    ...componentPackage,
  };
};
export const defaultStyles = (props: DbStyleObject): DefaultStyleObj => {
  return {
    container: {
      defaultStyleId: "container",
      label: "Container",
      styles: {},
    },
    ...props,
  };
};
export const controlOptions = (
  props: Partial<ControlOptions>
): ControlOptions => {
  return {
    ...props,
  };
};
