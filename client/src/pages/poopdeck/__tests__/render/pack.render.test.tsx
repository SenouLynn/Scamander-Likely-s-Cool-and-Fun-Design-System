import Poopdeck from "pages/poopdeck/Poopdeck";
import { buildPack } from "pages/poopdeck/utils/create";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const pack = buildPack({
  pack: {
    location: "testLocation",
    subComponents: [],
    label: "Test Label",
    children: ["Parent"],
  },
});

const RenderPoopdeck = ({ pack }: { pack?: ComponentPackage }) => {
  return (
    <BrowserRouter>
      <Poopdeck pack={pack} />
    </BrowserRouter>
  );
};
describe("poopdeck render packs", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  it("renders poopdeck", () => {
    render(<RenderPoopdeck />);
    expect(screen.getByRole("component-manager")).toBeInTheDocument();
  });

  it("renders builder for location", () => {
    render(<RenderPoopdeck pack={pack} />);
    expect(
      screen.getByRole(`build-container-${pack.location}`)
    ).toBeInTheDocument();
  });
  
  //TODO
  //Check if children builder is rendered 
});
