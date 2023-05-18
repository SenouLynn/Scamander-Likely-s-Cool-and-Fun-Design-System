import {
  buildPack,
  createLocation,
  seedPack,
} from "pages/poopdeck/utils/create";
import { assembleComponentSave } from "pages/poopdeck/utils/setters";

//Saving a component
//Component: FocusedComponent
//1: Take the focused component and check if it has seedComponent in location / name
//2: Take focused, find in field
//3: Take subComponents,
//4: Map over subComponents + find them from field. Change location to child location
//5: Recurse

const child = buildPack({ pack: { location: "testLocation-0" } });
const pack = buildPack({
  pack: { location: "testLocation", subComponents: [child] },
});
const seed = seedPack({});

const field = {
  seedComponent: { ...seed, label: "find me" },
  testLocation: { ...pack, label: "find me" },
  "testLocation-0": { ...child, label: "find me" },
};

describe("saving a component", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  it("scrubs seed component", () => {
    const result = assembleComponentSave(seed, { testLocation: pack });
    expect(Object.keys(result).includes("seedComponent")).toBeFalsy();
    expect(Object.keys(result)).toHaveLength(1);
  });

  it("takes testLocation", () => {
    const result = assembleComponentSave(pack, field);
    expect(Object.keys(result).includes("testLocation")).toBeTruthy();
  });

  it("gets testLocation from field", () => {
    const result = assembleComponentSave(pack, field);
    expect(result["testLocation"].label).toBe("find me");
  });

  it("scrubs children", () => {
    const result = assembleComponentSave(pack, field);
    expect(result["testLocation-0"]).toBeTruthy();
  });

  it("gets child from field", () => {
    const result = assembleComponentSave(pack, field);
    expect(result["testLocation-0"].label).toBe("find me");
  });
});
