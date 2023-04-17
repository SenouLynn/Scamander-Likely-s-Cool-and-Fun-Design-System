import { createLocation, uniqueId } from "../helpers/helpers";

const expectedBase = uniqueId;


describe("generates a location", () => {
  it("is happy:)", () => {
    expect(true).toBe(true);
  });
  it("generates unique id if undefined", () => {
    const pack = {
      location: undefined,
    };
    expect(createLocation(pack)).toBe(expectedBase);
  });
  it("generates unique id if null", () => {
    const pack = {
      location: null as unknown as string, //for testing purposes
    };
    expect(createLocation(pack)).toBe(expectedBase);
  });
  it("adds -0 if pack is subSubComponent", () => {
    const pack = {
      location: expectedBase,
    };
    expect(createLocation(pack)).toBe(expectedBase + "-0");
  });
});
