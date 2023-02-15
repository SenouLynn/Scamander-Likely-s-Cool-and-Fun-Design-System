import { createWrapperClasses } from "../createWrapperClasses";

const Flex: WrapperContainerProps = {
  gap: 2,
  display: "flex",
  justify: "center",
  align: "end",
};
const Grid: WrapperContainerProps = {
  gap: 4,
  display: "grid",
  columns: 4,
};
const Base: WrapperContainerProps = {};

describe("createWrapperClasses", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("creates flex class", () => {
    const result = createWrapperClasses({ component: "t", ...Flex });
    expect(result.includes("flex-center-end")).toBeTruthy();
  });
  it("creates grid class", () => {
    const result = createWrapperClasses({ component: "t", ...Grid });
    expect(result.includes("grid-col-4")).toBe(true);
  });
  it("creates no class if not flex or grid", () => {
    const result = createWrapperClasses({ component: "t", ...Base });
    expect(result).toBe("");
  });
});
