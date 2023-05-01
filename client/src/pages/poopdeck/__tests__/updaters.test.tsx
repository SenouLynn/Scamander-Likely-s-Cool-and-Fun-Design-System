import { renderHook, act } from "@testing-library/react";
import { usePoopDeck } from "../utils/hooks";
import { buildPack } from "../utils/create";

const pack = buildPack({
  pack: { componentId: "seedPack", location: "0" },
});
const field = {
  "0": pack,
};

//Update Pack
describe("updates pack", () => {
  it("updates master pack with new pack", () => {
    const newPack = buildPack({ pack: { location: "test" } });
    const { result } = renderHook(() => usePoopDeck({ pack }));
    act(() => {
      result.current.update.pack(newPack);
    });
    expect(result.current.pack).toBe(newPack);
  });
  it("updates master pack with new pack", () => {
    const newPack = buildPack({
      pack: { location: "test", label: "New Label" },
    });
    const { result } = renderHook(() => usePoopDeck({ pack }));
    act(() => {
      result.current.update.pack(newPack);
    });
    expect(result.current.field["test"]).toBe(newPack);
  });
});

//Add Pack to Field
describe("updates field", () => {
  it("adds new pack to field", () => {
    const newPack = buildPack({ pack: { location: "test" } });
    const { result } = renderHook(() => usePoopDeck({ pack, field }));
    act(() => {
      result.current.update.field(newPack);
    });
    expect(result.current.field["test"]).toBe(newPack);
  });

  it("it preserves old pack when adding new pack to field", () => {
    const newPack = buildPack({ pack: { location: "test" } });
    const { result } = renderHook(() => usePoopDeck({ pack, field }));
    act(() => {
      result.current.update.field(newPack);
    });
    expect(result.current.field["0"]).toBe(pack);
  });

  it("adds subcomponent to field", () => {
    const newPack = buildPack({
      pack: {
        location: "1",
        subComponents: [{ location: "1-1", componentId: "test2" }],
      },
    });
    const { result } = renderHook(() => usePoopDeck({ pack, field }));
    act(() => {
      result.current.update.field(newPack);
    });
    expect(result.current.field["1-1"].location).toBe("1-1");
  });
});

//Errors
describe("updates items in a package", () => {
  it("changes label for root pack", () => {
    const updated = { ...pack, label: "New Label" };
    const { result } = renderHook(() => usePoopDeck({ pack, field }));
    act(() => {
      result.current.update.field(updated);
    });
    expect(result.current.field[pack.location].label).toBe("New Label");
  });
});
