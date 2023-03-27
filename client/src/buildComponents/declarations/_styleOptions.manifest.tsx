import { runGenericStyleTests } from "../utils/tests/styles";

export const options_expanders: OptionsExpanders = {
  genericSizes: {
    id: "genericSizes",
    label: "Generic Sizes",
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
  },
};

export const styleOptions = {
  margin: {
    style: "margin",
    options: options_expanders.genericSizes,
  },
  padding: {
    style: "padding",
    options: options_expanders.genericSizes,
  },
};

export const tests = {
  margin: {
    style: "margin",
    options: options_expanders.genericSizes,
    testSuite: (styles: { style: string; options: string[] }) =>
      runGenericStyleTests(styles),
  },
  padding: {
    style: "padding",
    options: options_expanders.genericSizes,
    testSuite: (styles: { style: string; options: string[] }) =>
      runGenericStyleTests(styles),
  },
};
// export default styleOptions;
