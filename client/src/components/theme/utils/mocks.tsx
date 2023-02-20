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

export const genericSizeObjects = () => {
  return {
    none: {
      value: "none",
      label: "None",
    },
    base: {
      value: "base",
      label: "Base",
    },
    xs: {
      value: "xs",
      label: "X-Small",
    },
    sm: {
      value: "sm",
      label: "Small",
    },
    md: {
      value: "md",
      label: "Medium",
    },
    lg: {
      value: "lg",
      label: "Large",
    },
    xl: {
      value: "xl",
      label: "X-Large",
    },
    xxl: {
      value: "xxl",
      label: "XX-Large",
    },
  };
};
export const genericDisplayObjects = () => {
  return {
    flex: {
      value: "flex",
      label: "Flex",
    },
    block: {
      value: "block",
      label: "Block",
    },
    "inline-block": {
      value: "inline-block",
      label: "Inline Block",
    },
    inline: {
      value: "inline",
      label: "Inline",
    },
  };
};
