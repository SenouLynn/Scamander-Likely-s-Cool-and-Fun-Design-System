import {
  createAsteroidBelt,
  createComponentPackage,
  createInitData,
} from "../utils/helpers";

//Load Bearing
const page = createComponentPackage({
  props: {},
  pack: {
    componentId: "page-home",
    defaultStyleId: "page-home",
    location: "0",
  },
});
const pages = {
  "page-home": createComponentPackage({
    props: {},
    pack: {
      componentId: "page-home",
      subComponents: [
        {
          componentId: "container",
          defaultStyleId: "container",
          subComponents: [
            {
              componentId: "container",
              defaultStyleId: "container",
              location: "0.0.0",
            },
          ],
        },
        {
          componentId: "container",
          defaultStyleId: "container",
          subComponents: [
            {
              componentId: "container",
              defaultStyleId: "container",
              subComponents: [
                { componentId: "container", defaultStyleId: "container" },
              ],
            },
          ],
        },
      ],
      styles: {
        className: "totes",
      },
    },
  }),
};

const result = createAsteroidBelt({
  initData: createInitData({ pagesList: pages }),
  page,
});
describe("createAsteroidBelt", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("returns location of page as 0", () => {
    expect(result["0"].location).toBe("0");
  });
  it("returns componentId of page as 0", () => {
    expect(result["0"].componentId).toBe("page-home");
  });
  it("returns style of stored object in pages ", () => {
    expect(result["0"].styles.className).toEqual(
      pages["page-home"].styles.className
    );
  });

  it("returns page first child as 0.0", () => {
    expect(result["0.0"].location).toBe("0.0");
  });
  it("returns page second child as 0.1", () => {
    expect(result["0.1"].location).toBe("0.1");
  });
  it("returns page first grand child as 0.0.0", () => {
    expect(result["0.0.0"].location).toBe("0.0.0");
  });
  it("returns page second grand child as 0.0.1", () => {
    expect(result["0.1.0"].location).toBe("0.1.0");
  });
});
