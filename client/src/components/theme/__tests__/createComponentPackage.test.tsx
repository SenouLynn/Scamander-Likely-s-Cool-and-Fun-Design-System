import { createComponentPackage } from "../utils/helpers";


const nav = createComponentPackage({
  defaultStyleId: "container",
  component: "nav",
});

describe("createComponentPackage", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("produces package with nav and container", () => {
    expect(nav.component).toBe("nav");
    expect(nav.defaultStyleId).toBe("container");
  });
});
