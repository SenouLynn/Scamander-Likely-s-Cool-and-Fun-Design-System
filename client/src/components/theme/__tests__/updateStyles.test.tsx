import {
  createMockAllStyles,
  createMockUpdateStyles,
  genericDisplayObjects,
  genericSizeObjects,
} from "../utils/mocks";
import { updateStyles } from "../utils/updaters";
const genericSizesArr = Object.keys(genericSizeObjects());
const allStyles = createMockAllStyles();
const mockUpdater = createMockUpdateStyles({
  id: "container",
  styles: {
    padding: "lg",
    margin: "sm",
    border: true,
    className: "test-class",
  },
  allStyles,
});
const styleKeys = {
  display: {
    options: genericDisplayObjects(), //Not tested yet
  },
  margin: { options: "genericSizes" },
  padding: { options: "genericSizes" },
  className: { options: "string" },
  border: { options: "boolean" },
};
const customUpdater = { ...mockUpdater, type: "custom", id: "nav_wrapper" };

describe("updateStyles", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  Object.entries(styleKeys).forEach(([key, value]) => {
    value.options === "string" &&
      describe(`takes it updates default ${key}`, () => {
        it(`takes it updates default ${key}`, () => {
          const result = updateStyles(mockUpdater);
          expect(
            result.defaultStyles.container.styles[key].includes("test-class")
          ).toBe(true);
        });
        it(`takes it updates custom ${key}`, () => {
          const result = updateStyles(customUpdater);
          expect(
            result.componentList.nav_wrapper.styles[key].includes("test-class")
          ).toBe(true);
        });
      });
    value.options === "boolean" &&
      describe(`takes it updates default ${key}`, () => {
        it(`updates default ${key} with ${value.options}`, () => {
          const result = updateStyles(mockUpdater);
          expect(result.defaultStyles.container.styles[key]).toBe(true);
        });
        it(`updates custom ${key} with ${value.options}`, () => {
          const result = updateStyles(customUpdater);
          expect(result.componentList.nav_wrapper.styles[key]).toBe(true);
        });
      });
    value.options === "genericSizes" &&
      describe(`takes it updates default ${key}`, () => {
        it(`updates default ${key} with ${value.options}`, () => {
          const result =
            updateStyles(mockUpdater).defaultStyles.container.styles[key];
          expect(genericSizesArr.includes(result)).toBe(true); //Todo: genericSizesarray.includes value
        });
        it(`updates custom ${key} with ${value.options}`, () => {
          const result =
            updateStyles(customUpdater).componentList.nav_wrapper.styles[key];
          expect(genericSizesArr.includes(result)).toBe(true);
        });
      });

  });
});
