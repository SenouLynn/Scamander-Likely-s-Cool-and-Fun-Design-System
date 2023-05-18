import { usePoopDeck } from "pages/poopdeck/utils/hooks";
import { renderHook } from "@testing-library/react";
import { buildPack, seedPack } from "pages/poopdeck/utils/create";
import { createComponentTree } from "pages/poopdeck/utils/helpers";

const pack = buildPack({
  pack: {
    location: "testLocation",
    subComponents: [],
    label: "Test Label",
    children: [],
  },
});
const sibling = buildPack({
  pack: {
    location: "siblingLocation",
    subComponents: [],
    label: "Sibling Label",
    children: [],
  },
});

const child = buildPack({
  pack: {
    location: "testComponent-0",
    subComponents: [],
    label: "Child Label",
  },
});

const field = {
  seedComponent: seedPack(),
  testLocation: {
    ...pack,
    label: "Parent field label",
    subComponents: [{ location: "testComponent-0" }],
  },
  siblingLocation: { ...sibling },
  "testComponent-0": { ...child, label: "Child field label" },
};

describe("usePoopdeck state tests", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  it("usePoopdeck returns object", () => {
    const { result } = renderHook(() => usePoopDeck());
    expect(typeof result.current).toBe("object");
  });

  it("should return a seedComponent if nothing passed", () => {
    const { result } = renderHook(() => usePoopDeck());
    expect(result.current.pack.location).toBe("seedComponent");
  });

  it("should return testComponent if  passed", () => {
    const { result } = renderHook(() => usePoopDeck({ pack }));
    expect(result.current.pack.location).toBe("testLocation");
  });

  it("pack should load pack from theme field", () => {
    const { result } = renderHook(() => usePoopDeck({ pack, field }));
    expect(
      result.current.pack.subComponents.find(
        (x) => x.location === "testComponent-0"
      )
    ).toBeTruthy();
  });

  it("should return child from field", () => {
    const { result } = renderHook(() => usePoopDeck({ pack, field }));
    // console.log(result.current.pack.subComponents[0]);
    expect(result.current.pack.subComponents[0].label).toBe(
      "Child field label"
    );
  });
});

describe("builds tree", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  it("should return testComponent if  passed", () => {
    const result = createComponentTree(pack, field);
    expect(result.location).toBe("testLocation");
  });

  it("pack should load pack from theme field", () => {
    const result = createComponentTree(pack, field);
    expect(result.label).toBe("Parent field label");
  });

  it("should return child from field", () => {
    const result = createComponentTree(pack, field);
    expect(result.subComponents[0].label).toBe("Child field label");
  });
});
