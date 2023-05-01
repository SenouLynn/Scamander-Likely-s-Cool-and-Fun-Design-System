import { buildPack, createLocation } from "pages/poopdeck/utils/create";
import { getPackFromField } from "../../getters/getPackFromField";

const parent = buildPack({
  pack: {
    label: "parent",
    role: "component",
  },
});
const aunt = buildPack({
  pack: {
    label: "parauntent",
    role: "component",
  },
});
const uncle = buildPack({
  pack: {
    role: "component",
    styles: { margin: "sm" },
    subComponents: [{ location: aunt.location }],
  },
});
const child = buildPack({
  pack: { location: createLocation(parent), componentId: uncle.location },
});

const field = {
  [parent.location]: {
    ...parent,
    subComponents: [{ location: child.location }],
  },
  [uncle.location]: uncle,
  [child.location]: child,
};

const tests = [
  {
    name: "given location, returns parent",
    props: {
      pack: { location: parent.location },
      field: field,
    },
    run: getPackFromField,
    test: (test: any, result: any) => {
      return expect(result.location).toStrictEqual(parent.location);
    },
  },
  {
    name: "given location, returns parent with subcomponents",
    props: {
      pack: { location: parent.location },
      field: field,
    },
    run: getPackFromField,
    test: (test: any, result: any) => {
      return expect(result.subComponents).toStrictEqual(
        field[parent.location].subComponents
      );
    },
  },
  {
    name: "given location, returns child with correct location",
    props: {
      pack: { location: child.location },
      field: field,
    },
    run: getPackFromField,
    test: (test: any, result: any) => {
      return expect(result.location).toStrictEqual(child.location);
    },
  },
  {
    name: "given location, returns child correct componentId",
    props: {
      pack: { location: child.location },
      field: field,
    },
    run: getPackFromField,
    test: (test: any, result: any) => {
      return expect(result.componentId).toStrictEqual(child.componentId);
    },
  },
  {
    name: "given location, if stored component has a componentId, grabs styles and merges",
    props: {
      pack: { location: child.location },
      field: field,
    },
    run: getPackFromField,
    test: (test: any, result: any) => {
      return expect(result.styles.margin).toStrictEqual("sm");
    },
  },
];

describe("render ThemeProvider", () => {
  it("is happy", () => {
    expect(true).toBeTruthy();
  });
  tests.forEach(({ ...test }) => {
    it(test.name, () => {
      test.test(test, test.run(test.props.pack, test.props.field));
    });
  });
});

//Tests
//Getting parent returns parent obj
//Getting parent returns parent with subcomponents

//Since package will be called for each child, test again but calling child
//Test that child returns correct location
//Test that child returns correct componentId
//Test that child returns componentId styles
//Test that child returns componentId subcomponents
//Test that child returns location styles
//Test that child returns location subcomponents
//Test merge of both
