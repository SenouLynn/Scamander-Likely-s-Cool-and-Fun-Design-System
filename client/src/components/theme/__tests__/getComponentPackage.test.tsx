import { getComponentPackage } from "../utils/helpers";
export const createAllStyles = (props?: any) => {
  return {
    defaultStyles: {
      container: {
        componentId: "container",
        defaultStyleId: "container",
        label: "Container",
        styles: {
          border: true,
          display: "flex",
          gap: 1,
          padding: "sm",
          className: "",
        },
      },
    },
    componentList: {
      nav: {
        componentId: "nav_wrapper",
        defaultStyleId: "container",
        label: "Navbar",
        styles: {
          className: "flex-between-center background-secondary",
          padding: "md",
        },
      },
    },
    controlOptions: {},
  };
};
const nav = getComponentPackage({
  defaultStyleId: "container",
  componentId: "nav",
  allStyles: createAllStyles(),
});
describe("get component package from context", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("expect custom className to override", () => {
    expect(nav.styles.className).toBe(
      "flex-between-center background-secondary"
    );
  });
  it("expect custom padding to override", () => {
    expect(nav.styles.padding).toBe("md");
  });
});
