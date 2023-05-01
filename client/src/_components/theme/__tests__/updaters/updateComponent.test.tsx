import { buildPack } from "pages/poopdeck/utils/create";

export const updateComponentInField = (
  component: ComponentPackage,
  themeField: ComponentPackageSet
) => {
  let field = { ...themeField };
  //Updates location object in themeField
  field[component.location] = component;
  return field;
};

const component = buildPack({});
const field = { [component.location]: component };
const tests = [
  {
    name: "Can run",
    props: {
      themeField: field,
      pack: { ...component, styles: { margin: "sm" } },
    },
    test: (test: any) => {
      const result = updateComponentInField(
        test.props.pack,
        test.props.themeField
      );
      return expect(result[test.props.pack.location].styles.margin).toBe("sm");
    },
  },
  {
    name: "Can update a style by updating location",
    props: {
      themeField: field,
      pack: { ...component, styles: { color: "red" } },
    },
    test: (test: any) => {
      const result = updateComponentInField(
        test.props.pack,
        test.props.themeField
      );
      return expect(result[test.props.pack.location].location).toBe(
        component.location
      );
    },
  },
];

describe("render ThemeProvider", () => {
  it("is happy", () => {
    expect(true).toBeTruthy();
  });
  tests.forEach(({ ...test }) => {
    it(test.name, () => {
      test.test(test);
    });
  });
});
