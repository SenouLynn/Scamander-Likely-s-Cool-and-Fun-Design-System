export const genericSizes: OptionsExpander = {
  id: "genericSizes",
  label: "Generic Sizes",
  builder: ({ style, value }: OptionsExpanderElement) => `${style}-${value}`,
  options: {
    xsm: {
      value: "xsm",
      label: "Extra Small",
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
      label: "Extra Large",
    },
  },
};

export const booleanStyles = {
  id: "booleanStyles",
  label: "Boolean Styles",
  builder: ({ style, value }: OptionsExpanderElement) =>
    value === "true" ? `${style}` : "",
  options: {
    true: {
      value: "true",
      label: "True",
    },
    false: {
      value: "false",
      label: "False",
    },
  },
};

//Load Bearing
export const styleOptions = {
  margin: {
    style: "margin",
    label: "Margin",
    options: genericSizes,
    labels: ["margin", "master"],
  },
  "margin-start": {
    style: "margin-start",
    label: "Margin Start",
    options: genericSizes,
    labels: ["margin", "start"],
  },
  "margin-end": {
    style: "margin-end",
    label: "Margin End",
    options: genericSizes,
    labels: ["margin", "end"],
  },
  "margin-top": {
    style: "margin-top",
    label: "Margin Top",
    options: genericSizes,
    labels: ["margin", "top"],
  },
  "margin-bottom": {
    style: "margin-bottom",
    label: "Margin Bottom",
    options: genericSizes,
    labels: ["margin", "bottom"],
  },
  padding: {
    style: "padding",
    label: "Padding",
    options: genericSizes,
    labels: ["padding", "master"],
  },
  "padding-top": {
    style: "padding-top",
    label: "Padding Top",
    options: genericSizes,
    labels: ["padding", "master", "top"],
  },
  "padding-bottom": {
    style: "padding-bottom",
    label: "Padding Bottom",
    options: genericSizes,
    labels: ["padding", "master", "bottom"],
  },
  "padding-start": {
    style: "padding-start",
    label: "Padding Start",
    options: genericSizes,
    labels: ["padding", "master", "start"],
  },
  "padding-end": {
    style: "padding-end",
    label: "Padding End",
    options: genericSizes,
    labels: ["padding", "master", "end"],
  },
  border: {
    style: "border",
    label: "Border",
    options: booleanStyles,
    labels: ["border", "master"],
  },
};
