export const createMockUpdateStyles = (props: any) => {
  return {
    type: "default",
    id: "container",
    style: {},
    allStyles: createMockAllStyles(),
    ...props,
  };
};

export const createMockAllStyles = (props?: any): InitData => {
  return {
    defaultStyles: {
      container: {
        defaultStyleId: "container",
        label: "Container",
        styles: {
          border: true,
          display: "flex",
          gap: 1,
          padding: "sm",
          className: "",
        },
      },
    },
    componentList: {
      nav_wrapper: {
        componentId: "nav",
        label: "Nav",
        defaultStyleId: "container",
        styles: {
          className: "flex-between-center background-secondary",
          padding: "md",
        },
      },
    },
    controlOptions: {},
  };
};

export const componentList = (componentPackage: Partial<ComponentStyleObj>) => {
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
export const defaultStyles = (
  props: Partial<DefaultStyleObj>
): DefaultStyleObj => {
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


