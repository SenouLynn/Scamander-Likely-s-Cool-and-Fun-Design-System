import { createItemClasses } from "../createItemClasses";

const FlexItem: FlexItemProps = {
  display: "flex",
  size: 5,
};
const GridItem: GridItemProps = {
  display: "grid",
  height: 5,
  width: 2,
};

describe("createItemClasses", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  it("creates flex class", () => {
    const result = createItemClasses({ component: "t", ...FlexItem });
    expect(result.includes("flex-grow-5")).toBe(true);
  });
  it("creates grid class", () => {
    const result = createItemClasses({ component: "t", ...GridItem });
    expect(result.includes("row-span-5")).toBe(true);
    expect(result.includes("col-span-2")).toBe(true);
  });
});
