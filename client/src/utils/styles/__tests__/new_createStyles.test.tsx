import { createComponentPackage } from "../../../_components/_theme/utils/helpers";
import { genericSizes, styleOptions } from "../_styleBuilders.manifest";

export const createStyles = (pack: ComponentPackage) => {
  const { styles } = pack;
  const builders: searchable = styleOptions;
  let className = [styles.className] || [""];
  //Highly Load Bearing! Builds styles
  Object.entries(styles).forEach(([key, value]) => {
    if (key !== "className") {
      const options = builders[key].options;
      const builder = options.builder;
      const c = builder({ style: key, value });
      className.push(c);
    }
  });
  return className.join(" ").trim();
};

const component = (style: { [key: string]: any }): ComponentPackage =>
  createComponentPackage({ pack: { styles: { ...style } } });

describe("createStyles builds all styles", () => {
  it("is happy :)", () => {
    expect("happy").toBe("happy");
  });

  Object.values(styleOptions).forEach((test) => {
    const options = test.options.options;
    Object.values(options).forEach((option) => {
      const c = component({
        [test.style]: option.value || "",
      });
      const className = createStyles(c);

      it(`builds ${test.style} ${option.value} as ${className}`, () => {
        expect(className).toBe(
          test.options.builder({ ...option, style: test.style })
        );
      });
    });
  });

  //run test suites for each styles
});
