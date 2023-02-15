import { createStyles } from "../createStyles";
import { Container } from "../../../components/Container";

const renderItem: ComponentPackage = {
  Component: Container,
  styles: {
    margin: "sm",
    padding: "md",
    className: "bg-primary",
  },
  children: [],
  render: (props: ComponentPackage) => {
    const { Component, styles, children } = props;
    return (
      <Component {...styles}>
        {children.map((child: ComponentPackage) => {
          return child.render(child);
        })}
      </Component>
    );
  },
};

const defaultStyles: BuildStyleCartridge = {
  component: "container",
  role: "wrapper",
  border: true,
  gap: 1,
  className: "page",
};
const stylePackage: BuildStyleCartridge = {
  component: "row",
  display: "flex",
  gap: 1,
};

const styleCart = { ...defaultStyles, ...renderItem };
describe("createStyles", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("works", () => {
    expect(createStyles(styleCart)).toBeTruthy();
  });
  it("includes inherited className", () => {
    const result = createStyles(styleCart);
    console.log(result);
    expect(result.includes("bg-primary")).toBe(true);
  });
  it("includes passed className", () => {
    const result = createStyles(styleCart);
    console.log(result);
    expect(result.includes("page")).toBe(true);
  });
});
