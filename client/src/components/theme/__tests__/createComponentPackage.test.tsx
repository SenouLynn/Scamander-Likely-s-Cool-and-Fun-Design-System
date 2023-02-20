import { createComponentPackage } from "../utils/helpers";

const nav = createComponentPackage({
  defaultStyleId: "container",
  componentId: "nav",
});

describe("createComponentPackage", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("produces package with nav and container", () => {
    expect(nav.componentId).toBe("nav");
    expect(nav.defaultStyleId).toBe("container");
  });
});
