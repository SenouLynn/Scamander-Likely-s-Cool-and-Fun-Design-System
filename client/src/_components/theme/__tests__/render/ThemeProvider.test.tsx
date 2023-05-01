import { render, screen } from "@testing-library/react";
import ThemeProvider from "../../ThemeProvider";

const tests = [
  {
    name: "renders without crashing",
    props: {},
    Component: ThemeProvider,
    test: () =>
      expect(screen.getByTestId("theme-provider")).toBeInTheDocument(),
  },
];

describe("render ThemeProvider", () => {
  it("is happy", () => {
    expect(true).toBeTruthy();
  });
  tests.forEach(({Component, ...test}) => {
    it(test.name, () => {
      render(<Component {...test.props} />);
      test.test();
    });
  });
});
