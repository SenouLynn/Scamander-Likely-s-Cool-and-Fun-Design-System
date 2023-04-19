import { createAsteroidBelt } from "../../../buildComponents/poopdeck/helpers/helpers";
import { createComponentPackage, createInitData } from "../utils/helpers";

//Packs
const grandChildPack = createComponentPackage({
  pack: { componentId: "2", location: "2" },
});
const childPack = createComponentPackage({
  pack: { componentId: "1", location: "1", subComponents: [grandChildPack] },
});
const masterPack = createComponentPackage({
  pack: {
    componentId: "0",
    location: "0",
    subComponents: [childPack],
  },
});

//Db
const componentList = {
  "0": {
    ...masterPack,
    styles: {
      className: "test",
    },
  },
  "1": {
    ...childPack,
    styles: {
      className: "test",
    },
  },
  "2": {
    ...grandChildPack,
    styles: {
      className: "test",
    },
  },
};
const asteroidBelt = createAsteroidBelt(masterPack, componentList);

describe("it creates asteroidBelt", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("returns location of page as 0", () => {
    expect(asteroidBelt["0"].location).toBe("0");
  });
  it("returns className from field", () => {
    expect(asteroidBelt["0"].styles?.className).toBe("test");
  });

  it("returns child of page ", () => {
    console.log(createAsteroidBelt(masterPack, { masterPack }));
    expect(asteroidBelt["1"].location).toBe("1");
  });
  it("returns className from field", () => {
    expect(asteroidBelt["1"].styles?.className).toBe("test");
  });

  it("returns grand child pack ", () => {
    console.log(createAsteroidBelt(masterPack, { masterPack }));
    expect(asteroidBelt["2"].location).toBe("2");
  });
  it("returns className from field", () => {
    expect(asteroidBelt["2"].styles?.className).toBe("test");
  });
});
