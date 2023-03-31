import { render, screen } from "@testing-library/react";
import ManageComponent from "../ManageComponent";

export const obj = {
  Component: ManageComponent,
  pack: {
    componentId: "test",
  },
};
export const renderTests = [
  {
    name: "master component",
    searchId: "manage-component",
  },
  {
    name: "title",
    searchId: "title",
  },
];

describe("render tests for manage component", () => {
  renderTests.forEach((test) => {
    it(`${test.name}`, () => {
      render(<ManageComponent />);
      expect(screen.getByTestId(test.searchId)).toBeInTheDocument();
    });
  });
});
