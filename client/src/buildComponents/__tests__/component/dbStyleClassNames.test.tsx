import { runGenericStyleTests } from "../../../utils/tests/styles";

const test_styles = [
  {
    style: "margin",
    options: ["xsm", "sm", "md", "lg", "xl", "xxl"],
    testSuite: (styles: { style: string; options: string[] }) =>
      runGenericStyleTests(styles),
  },
  {
    style: "padding",
    options: ["xsm", "sm", "md", "lg", "xl", "xxl"],
    testSuite: (styles: { style: string; options: string[] }) =>
      runGenericStyleTests(styles),
  },
];

test_styles.forEach((x) => x.testSuite(x));
