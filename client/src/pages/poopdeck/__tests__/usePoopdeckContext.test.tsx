import { render, screen, renderHook } from "@testing-library/react";
import Poopdeck from "../Poopdeck";
import { buildPack } from "../utils/create";
import { usePoopDeck } from "../utils/hooks";

const field = {
  seedComponent: buildPack({
    pack: { label: "Hello World :)", location: "0" },
  }),
};

describe("usePoopdeck Funcations", () => {
  //   it("it happy :)", () => {
  //     expect(true).toBe(true);
  //   });

  //   it("renders Theme and Poopdeck", () => {
  //     render(<Poopdeck />);
  //     expect(screen.getByTestId("page-poopdeck")).toBeInTheDocument();
  //   });
  //Provide theme from theme context
  //Initial pack is seed pack with locaiton 0, and readOnly attribute

  it("takes field (from Page) as props", () => {
    const { result } = renderHook(() => usePoopDeck({ field }));
    expect(result.current.field).toEqual(field);
  });
  //Initial pack gets styles from ThemeField
  //Initial pack is displayed in Poopdeck component, findbyTestId

  //Display updates:
  //1. update pack updates theme version
  //2. update pack updates focused pack
  //3. update pack updates poopdeckfield
  //3. update pack updates themeField
  //4. update pack updates pack styles
  //5. update pack with subcomponents updates pack, focused, themefield,
  //6. update pack with subcomponents updates poopdeck field and themefield
});
