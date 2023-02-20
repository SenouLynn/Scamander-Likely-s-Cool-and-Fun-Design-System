import { resolvePath } from "../utils/helpers";

describe("resolves path", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("updates 1 level deep", () => {
    const tree = {
      a: "",
    };
    const path = "a";
    const result = resolvePath(tree, "butt", path);
    expect(result.a).toBe("butt");
  });
  it("updates 2 level deep", () => {
    const tree = {
      a: {
        b: "",
      },
    };
    const path = "a.b";
    const result = resolvePath(tree, "butt", path);
    expect(result.a.b).toBe("butt");
  });
});
