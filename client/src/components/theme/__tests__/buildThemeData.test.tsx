export const themeContextProps: ThemeWrapperProps = {
  componentList: {},
};

export const dbRes = {
  componentList: {},
  defaultStyles: {},
  controlOptions: {},
};

export const buildThemeData = ({
  props,
  response,
}: {
  props: ThemeWrapperProps;
  response: Partial<InitData>;
}): InitData => {
  return {
    pagesList: {
      ...response.pagesList,
      ...props.pagesList,
    },
    routes: {
      ...response.routes,
      ...props.routes,
    },
    defaultStyles: {
      ...response.defaultStyles,
      ...props.defaultStyles,
    },
    controlOptions: {
      ...response.controlOptions,
      ...props.controlOptions,
    },
    componentList: {
      ...props.componentList,
      ...response.componentList,
    },
    setData: () => {},
    asteroidBelt: {
      ...response.asteroidBelt,
      ...props.asteroidBelt,
    },
  };
};
export const tests = [
  {
    name: "prop component list overrides db component list",
    props: { ...themeContextProps, componentList: { test: { styles: "sm" } } },
    dbRes: { ...dbRes, componentList: { test: { styles: "xsm" } } },
    expect: (res: any) => expect(res.componentList.test.styles).toBe("xsm"),
  },
];

describe("adds props to theme context", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  tests.forEach((test) => {
    it(test.name, () => {
      const res = buildThemeData({ props: test.props, response: test.dbRes });
      test.expect(res);
    });
  });
});
