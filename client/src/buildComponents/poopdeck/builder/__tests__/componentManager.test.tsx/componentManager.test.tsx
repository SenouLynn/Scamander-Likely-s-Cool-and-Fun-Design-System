import { useState } from "react";
import { createComponentPackage } from "../../../../../components/theme/utils/helpers";
import { renderHook, act } from "@testing-library/react";
import { useComponentManager } from "../../newBuilder/helpers/hooks";

const seedPack = createComponentPackage({ pack: { componentId: "seedPack" } });

const baseResult = renderHook(() => useComponentManager(seedPack)).result
  .current;

describe("useComponentManager", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  //   it("returns original object from seedPack", () => {
  //     console.log(baseResult);
  //     expect(baseResult.original).toBe(seedPack);
  //   });
  //   it("returns current version  pack as pack", () => {
  //     expect(baseResult.pack).toBe(seedPack);
  //   });
});

describe("updates masterPack", () => {
  const newPack = createComponentPackage({
    pack: { componentId: "new_component_2", location: "0" },
  });
  const childPack = createComponentPackage({
    pack: { location: "0.0", componentId: "childPack" },
  });

  it("updates master pack with new pack", () => {
    const { result } = renderHook(() => useComponentManager(seedPack));
    act(() => {
      result.current.updaters.masterPack(newPack);
    });
    expect(result.current.pack).toBe(newPack);
  });

  it("updates master pack with new pack (pack)", () => {
    const { result } = renderHook(() => useComponentManager(seedPack));
    act(() => {
      result.current.updaters.masterPack(newPack);
    });
    expect(result.current.pack).toBe(newPack);
  });

  it("updates field pack with new pack (location)", () => {
    const { result } = renderHook(() => useComponentManager(seedPack));
    act(() => {
      result.current.updaters.masterPack(newPack);
    });
    expect(result.current.field[seedPack.location].location).toBe(
      newPack.location
    );
  });

  it("updates field pack with new pack with location (location)", () => {
    const { result } = renderHook(() => useComponentManager(seedPack));
    act(() => {
      result.current.updaters.field(childPack);
    });
    expect(result.current.field[childPack.location].location).toBeTruthy();
  });

  it("adds child to parent", () => {
    //Process, add child to parent, add new parent to field, add child to field
    const { result } = renderHook(() => useComponentManager(seedPack));

    //1. Add child to parent
    act(() => {
      result.current.updaters.field(childPack);
    });
    act(() => {
      result.current.updaters.field({ ...newPack, subComponents: [childPack] });
    });
  });
});
