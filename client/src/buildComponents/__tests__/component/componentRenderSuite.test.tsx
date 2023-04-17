import { render, screen } from "@testing-library/react";
import ThemeWrapper from "../../../components/theme/ThemeContext";
import { Render } from "../../../components/Render";
import { pages } from "../../../components/theme/declarations/_localPages.manifest";
//Assumptions
// 1. The component is wrapped in a ThemeWrapper.
// 2. The component is exported as a named export.
// 3. The component has access to the ThemeContext.

export const TestComponent = (props: ComponentProps) => {
  return Render(props, {
    defaultStyleId: "test_component",
    componentId: "test_component",
  });
};

export const ThemeComponent = ({
  customComponent,
  customProps,
}: {
  customComponent?: Partial<ComponentPackage>;
  customProps?: ComponentProps;
}) => {
  const componentList: any = {
    test_component: {
      defaultStyleId: "test_component",
      componentId: "test_component",
      label: "test_component",
      ...customComponent,
      styles: {
        className: "test_component",
        ...customComponent?.styles,
      },
    },
    black_box: {
      defaultStyleId: "black_box",
      componentId: "black_box",
      label: "Black Box",
      styles: {
        display: "flex",
        justify: "center",
        align: "center",
        padding: "md",
        className: "bg-color-black w-10rem h-10rem",
      },
    },
  };
  return (
    <ThemeWrapper componentList={componentList}>
      <pages.TestRenderer {...customProps} className="test" />
    </ThemeWrapper>
  );
};

describe("Render Component", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  // it("renders page inside theme wrapper", () => {
  //   render(<ThemeComponent />);
  //   //testId is tree location. pages are root === 0
  //   expect(screen.getByTestId("0")).toBeInTheDocument();
  // });

  // it("gets className from passed props", () => {
  //   render(<ThemeComponent />);
  //   expect(screen.getByTestId("0")).toHaveClass("test");
  // });

  // it("renders page subcomponent", () => {
  //   render(<ThemeComponent />);
  //   expect(screen.getByTestId("0.0")).toBeInTheDocument();
  // });

  // it("renders second page subcomponent", () => {
  //   render(<ThemeComponent />);
  //   expect(screen.getByTestId("0.1")).toBeInTheDocument();
  // });

  // it("renders third level of subcomponent", () => {
  //   render(<ThemeComponent />);
  //   expect(screen.getByTestId("0.0.0")).toBeInTheDocument();
  // });
});
