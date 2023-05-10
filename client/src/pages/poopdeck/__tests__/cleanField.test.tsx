import { buildPack } from "../utils/create";
import { cleanField } from "../utils/helpers";

describe("clean field from seedComponents", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  const field = {
    seedComponent: buildPack({}),
    "seedComponent-0": buildPack({}),
  };
  it("removes seedComponent from field", () => {
    const result = cleanField(field);
    expect(result).toEqual({});
  });
});
