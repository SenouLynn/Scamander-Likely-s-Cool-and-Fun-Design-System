import { createComponentPackage } from "../../../_components/_theme/utils/helpers";
import { createLocalField, uniqueId } from "../utils/create";
const mock_indexedField = (number: number) => {
  const indexedField: searchable = {};
  for (let i = 0; i < number; i++) {
    const location = uniqueId();
    indexedField[location] = createComponentPackage({});
  }
  return indexedField;
};

describe("creates initial field", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  it("adds initial pack to field", () => {
    const pack = createComponentPackage({ pack: { label: "test" } });
    const result = createLocalField(pack, {});
    expect(result).toHaveProperty(pack.location);
    expect(result[pack.location].label).toBe("test");
  });

  it("adds passed field to field", () => {
    const pack = createComponentPackage({});
    const field = mock_indexedField(1);
    const result = createLocalField(pack, {}, field);
    const firstField = Object.keys(field)[0];
    expect(result[firstField].location).toBe(
      field[firstField].location
    );
  });
});
