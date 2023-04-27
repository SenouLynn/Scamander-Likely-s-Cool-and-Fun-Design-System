import { render, screen } from "@testing-library/react";
export const helpers = {
  testBooleanStyleOptions: ({
    style,
    options,
  }: {
    style: string;
    options: any[];
  }) => {},
  testGenericStyleOptions: ({
    style,
    options,
  }: {
    style: string;
    options: any[];
  }) =>
    options.reduce((acc: TestStyleObj[], curr: string) => {
      const p = acc;
      p.push({
        style: style,
        styleOption: curr as any,
        renderedStyleName: `${style}-${curr}`,
      });
      return p;
    }, []),
};

//NEED TO REBUILD THEME COMPONENT

// export const runGenericStyleTests = (style: any) => {
//   const buildTestSuite = helpers.testGenericStyleOptions(style);
//   describe(`db rendered ${style.style} style`, () => {
//     it("is happy :)", () => {
//       expect(true).toBe(true);
//     });

//     buildTestSuite.forEach((x: TestStyleObj) => {
//       it(`renders ${x.renderedStyleName} for style ${x.style} option ${x.styleOption}`, () => {
//         render(
//           <ThemeComponent
//             customComponent={{ styles: { [x.style]: x.styleOption } }}
//           />
//         );
//         expect(screen.getByTestId("0.1")).toHaveClass(x.renderedStyleName);
//       });
//     });
//   });
//   describe(`props styles rendered ${style.style} style`, () => {
//     it("is happy :)", () => {
//       expect(true).toBe(true);
//     });

//     buildTestSuite.forEach((x: TestStyleObj) => {
//       it(`renders ${x.renderedStyleName} for style ${x.style} option ${x.styleOption}`, () => {
//         render(<ThemeComponent customProps={{ [x.style]: x.styleOption }} />);
//         expect(screen.getByTestId("0")).toHaveClass(x.renderedStyleName);
//       });
//     });
//   });
// };
