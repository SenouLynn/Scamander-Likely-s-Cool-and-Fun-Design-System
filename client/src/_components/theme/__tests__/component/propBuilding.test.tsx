import { assembleStyles } from "_components/theme/utils/hooks/helpers";
import { buildPack } from "pages/poopdeck/utils/create";

buildPack;

export const propStyles: StylePackage = {
  className: "test",
  display: "flex",
};
const componentPackage: ComponentPackage = buildPack({
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
      { componentId: "black_box", location: "black_box" },
    ]);
  });

  //Game plan
  //Styles:
  //style obj needs to be passed in through props flat, this is priority 1
  //then get componentList styles from theme context
  //then get location styles from componentList, last priority

  //use then comes custom component package from theme context
  //use this for subcomponents
});
