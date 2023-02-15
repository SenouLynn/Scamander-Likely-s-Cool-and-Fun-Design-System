import { getComponentPackage } from "../utils/helpers";

const nav = getComponentPackage({ defaultId: "container", component: "nav" });
describe("get component package from context", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("expect custom className to override", () => {
    expect(nav.styles.className).toBe("flex-between-center background-primary");
  });
  it("expect custom padding to override", () => {
    expect(nav.styles.padding).toBe("sm");
  });
});
