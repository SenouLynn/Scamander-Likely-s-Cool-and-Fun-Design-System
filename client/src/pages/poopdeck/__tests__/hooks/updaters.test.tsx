import { renderHook, act } from "@testing-library/react";
import { buildPack, seedPack } from "pages/poopdeck/utils/create";
import { usePoopDeck } from "pages/poopdeck/utils/hooks";

const field = {
  seedComponent: buildPack({
    pack: { label: "Hello World :)", location: "seedComponent" },
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

const runUpdateFocus = async (
  p: ComponentPackage,
  props: AtLeast<ComponentManager_New, "update" | "focused">
) => {
  return await act(async () => {
    return await props.update.focusedPack({
      ...p,
      label: "New Label",
    });
  });
};
const runUpdateField = async (
  p: ComponentPackage,
  props: AtLeast<ComponentManager_New, "update" | "focused">
) => {
  return await act(async () => {
    return await props.update.field({
      ...p,
      label: "New Label",
    });
  });
};
const runUpdatePack = async (
  p: ComponentPackage,
  props: AtLeast<ComponentManager_New, "update" | "focused">
) => {
  return await act(async () => {
    return await props.update.pack(seedPack({ ...p, label: "New Label" }));
  });
};

describe("updates pack", () => {
  it("returns pack & field after it's done", async () => {
    const { focused, update } = runPoopdeck({ field });
    const r = await runUpdateFocus(focused, { update, focused });

    expect(Object.keys(r).length).toBe(2);
    expect(Object.keys(r).includes("pack")).toBe(true);
    expect(Object.keys(r).includes("field")).toBe(true);
  });

  it("returns updated new label", async () => {
    const { focused, update } = runPoopdeck({ field });
    const r = await runUpdatePack(focused, { update, focused });
    expect(r.pack.label).toBe("New Label");
  });

  it("updates state pack with new label", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    const r = await runUpdatePack(focused, { update, focused });

    const updatePack = result.current.pack;
    expect(updatePack.label).toBe("New Label");
  });

  it("if seed pack, gives a new location id", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    const r = await runUpdatePack(focused, { update, focused });

    const updatePack = result.current.pack;
    expect(updatePack.location).not.toBe("seedComponent");
  });

  it("return pack location matches updated state pack location", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    const r = await runUpdatePack(focused, { update, focused });

    const updatePack = result.current.pack;
    expect(updatePack.location).toBe(r.pack.location);
  });

  it("adds new pack location to field returned", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    const r = await runUpdatePack(focused, { update, focused });
    const newLocation = r.pack.location;
    expect(r.field[newLocation]).toBeTruthy();
    expect(r.field[newLocation].label).toBe("New Label");
  });
  it("adds new pack location to state field", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    const r = await runUpdatePack(focused, { update, focused });
    const newLocation = r.pack.location;
    const newField = result.current.field;
    expect(newField[newLocation]).toBeTruthy();
    expect(newField[newLocation].label).toBe("New Label");
  });
});

describe("updates focus", () => {
  it("it happy :)", () => {
    expect(true).toBe(true);
  });

  it("returns pack & field after it's done", async () => {
    const { focused, update } = runPoopdeck({ field });
    const r = await runUpdateFocus(focused, { update, focused });

    expect(Object.keys(r).length).toBe(2);
    expect(Object.keys(r).includes("pack")).toBe(true);
    expect(Object.keys(r).includes("field")).toBe(true);
  });

  it("updating focused updates focused state with new component (label)", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateFocus(focused, { update, focused });

    const updateFocus = result.current.focused;
    expect(updateFocus.label).toBe("New Label");
  });
  it("updating focused updates focused state with new component (location)", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateFocus(focused, { update, focused });

    const updateFocus = result.current.focused;
    expect(updateFocus.location).not.toBe("seedComponent");
  });

  it("updating focused updates focused state with new component (label)", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateFocus(focused, { update, focused });
    const updateFocus = result.current.focused;
    expect(updateFocus.label).toBe("New Label");
  });

  it("updating focused updates returns new label (matches focus)", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateFocus(focused, { update, focused });
    const rFocus = r.pack;
    expect(rFocus.label).toBe("New Label");
  });

  it("updates focused pack info/styles", async () => {
    const { result } = renderHook(() => usePoopDeck({ field }));
    const hook = result.current;
    const focused = hook.focused;
    await act(async () => {
      await hook.update.focusedPack({
        ...focused,
        styles: {
          margin: "sm",
        },
      });
    });
    expect(result.current.focused.styles.margin).toBe("sm");
  });
});

describe("updates field", () => {
  it("updating field with seedPack return cleaned locattion", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateField(focused, { update, focused });
    expect(r.pack.location).not.toBe("seedComponent");
  });

  it("updates field with new location", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateFocus(focused, { update, focused });
    expect(result.current.field[r.pack.location]).toBeTruthy();
  });

  it("if seed component, updates focused with new location", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateFocus(focused, { update, focused });
    expect(result.current.focused.location).toBe(r.pack.location);
  });

  it("if seed component, updates pack (for display) with new location", async () => {
    const { result, focused, update } = runPoopdeck({ field });
    let r = await runUpdateFocus(focused, { update, focused });
    expect(result.current.pack.location).toBe(r.pack.location);
  });
});



describe("updates child", () => {
  //Update child pack in field
  //Update childpack in focused
  
});
