import { createRoutes } from "../utils/helpers";

const createDbRoute = (route: Partial<DbRoute>): DbRoute => {
  return {
    id: "",
    label: "",
    route: "/",
    subComponents: [],
    componentIds: {
      componentId: "container",
      defaultStyleId: "default",
    },
    ...route,
  };
};


describe("createRoutes", () => {
  it("is happy", () => {
    expect(true).toBe(true);
  });
  it("returns an array", () => {
    expect(createRoutes({})).toBeInstanceOf(Array);
  });

  const route = createRoutes({
    test: createDbRoute({ id: "test", route: "/test" }),
  });
  it("route passes route to path", () => {
    expect(route[0].path).toBe("/test");
  });
  //TODO: Test component can render within context
});
