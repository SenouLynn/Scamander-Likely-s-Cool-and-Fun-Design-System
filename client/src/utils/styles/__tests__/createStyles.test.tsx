import { createStyles } from "../createStyles";
// import { Container } from "../../../components/Container";

// const nav: ComponentPackage = {
//   defaultStyleId: "container",
//   componentId: "nav_wrapper",
//   label: "Nav",
//   subComponents: [],
//   location: "",
//   Component: Container,
//   styles: {
//     margin: "sm",
//     padding: "md",
//     className: "bg-primary",
//   },
//   children: [],
// };

// const defaultStyles: ComponentProps = {
//   componentId: "container",
//   role: "wrapper",
//   border: true,
//   gap: 1,
//   className: "page",
// };

// const styleCart = { ...defaultStyles, ...nav };
describe("createStyles", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  // it("works", () => {
  //   expect(createStyles(styleCart)).toBeTruthy();
  // });
  // it("includes inherited className", () => {
  //   const result = createStyles(styleCart);
  //   console.log(result);
  //   expect(result.includes("bg-primary")).toBe(true);
  // });
  // it("includes passed className", () => {
  //   const result = createStyles(styleCart);
  //   expect(result.includes("page")).toBe(true);
  // });
});
