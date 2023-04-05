import { renderHook } from "@testing-library/react";
import { useComponentManager } from "../helpers/hooks";
import { seedPack } from "../helpers/helpers";

const base = renderHook(() => useComponentManager(seedPack({ location: "0" })));

describe("hook tests", () => {
  it("Is happy:)", () => {
    expect(true).toBe(true);
  });
  console.log(base);
});
