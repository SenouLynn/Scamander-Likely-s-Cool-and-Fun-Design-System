import {
    createComponentClasses,
    createStyleClassBySize
} from "../createComponentClasses";
import { StylePackage } from "../types";

const ComponentProps: StylePackage = {
  component: "test",
  border: true,
  padding: "xsm",
  margin: "sm",
  fontSize: "md",
};

describe("createComponentClasses", () => {
  it("is happy : )", () => {
    expect(true).toBe(true);
  });
  const result = createComponentClasses(ComponentProps);
  it("adds border class", () => {
    expect(result.includes("border")).toBe(true);
  });
  it("adds padding class", () => {
    expect(result.includes("padding-xsm")).toBe(true);
  });
  it("adds margin class", () => {
    expect(result.includes("margin-sm")).toBe(true);
  });
  it("adds fontSize class", () => {
    expect(result.includes("margin-sm")).toBe(true);
  });
});

describe("createClassName", () => {
  it("creates padding class", () => {
    const result = createStyleClassBySize({
      stylePackage: ComponentProps,
      key: "padding",
      buildString: (key: string) => `padding-${key}`,
    });
    expect(result).toBe("padding-xsm");
  });
  it("creates margin class", () => {
    const result = createStyleClassBySize({
      stylePackage: ComponentProps,
      key: "margin",
      buildString: (key: string) => `padding-${key}`,
    });
    expect(result).toBe("padding-sm");
  });
});
