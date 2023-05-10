import { renderHook } from "@testing-library/react";
import { buildPack } from "pages/poopdeck/utils/create";
import { usePoopDeck } from "pages/poopdeck/utils/hooks";

const field = {
  seedComponent: buildPack({
    pack: { label: "Hello World :)", location: "0" },
  }),
};

const runPoopdeck = (props: Partial<ComponentManager_New>) => {
  const { field } = props;
  const { result } = renderHook(() => usePoopDeck({ field }));
  const state = result.current;
  return {
    result,
    ...state,
  };
};

describe("usePoopdeck Funcations", () => {
  it("it happy :)", () => {
    expect(true).toBe(true);
  });

  it("takes a component from props field and loads it", () => {
    const { result } = runPoopdeck({ field });
    const keys = Object.keys(result.current.field);
    expect(keys.includes("seedComponent")).toBe(true);
  });

  it("if no component passed, it creates a seed component as pack", () => {
    const { result } = runPoopdeck({});
    const pack = result.current.pack;
    expect(pack.location).toBe("seedComponent");
  });

  it("if no component passed, focus pack is seedComponent", () => {
    const { result } = renderHook(() => usePoopDeck());
    const pack = result.current.focused;
    expect(pack.location).toBe("seedComponent");
  });
});
