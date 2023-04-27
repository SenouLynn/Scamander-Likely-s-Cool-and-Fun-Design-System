import { assembleStyles } from "_components/theme_2.0/utils/hooks/helpers";
import { createComponentPackage } from "pages/poopdeck_2.0/utils/create";

createComponentPackage;

export const propStyles: StylePackage = {
  className: "test",
  display: "flex",
};
const componentPackage: ComponentPackage = createComponentPackage({
  props: {},
  pack: {
    location: "0",
    subComponents: [{ componentId: "black_box", location: "black_box" }],
    styles: {
      display: "grid",
      margin: "xl",
    },
  },
});

describe("building styles", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  const result = assembleStyles({ props: propStyles, componentPackage });

  it("adds className from props to pack", () => {
    expect(result.styles.className).toBe("test");
  });
  it("adds generic styles from props to pack", () => {
    expect(result.styles.display).toBe("flex");
  });
  it("adds pack styles from compopnentPackage to pack", () => {
    expect(result.styles.margin).toBe("xl");
  });
  it("adds pack subcomonents from compopnentPackage to pack", () => {
    expect(result.subComponents).toEqual([
      { componentId: "black_box", defaultStyleId: "black_box" },
    ]);
  });

  //Game plan
  //Styles:
  //style obj needs to be passed in through props flat, this is priority 1
  //then get componentList styles from theme context
  //then get defaultStyleId styles from componentList, last priority

  //use then comes custom component package from theme context
  //use this for subcomponents
});
