import { createComponentPackage } from "../../../components/theme/utils/helpers";

export const addNewSubComponents = (
  pack: ComponentPackage,
  packField: PackField
) => {
  const currentLocation = pack.location ? pack.location : "0";
  const location =
    currentLocation + "." + packField[currentLocation].subComponents.length;

  const subComponent = { ...pack, location };
  let field = { ...packField, ...{ [location]: subComponent } };
  const newComponentPack = {
    ...field["0"],
    subComponents: [...field["0"].subComponents, subComponent],
  };
  field["0"] = newComponentPack;
  return { field, pack: newComponentPack };
};

const pack = createComponentPackage({
  pack: {
    componentId: "new_component_1",
  },
});

const packField = {
  "0": pack,
};
describe("addNewSubComponents", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });

  it("adds a new sub component to a component package", () => {
    const newPack = createComponentPackage({
      pack: { componentId: "new_component_2" },
    });
    const { field } = addNewSubComponents(newPack, packField);
    expect(field["0.0"]).toBeTruthy();
  });
  it("maintains state of initial component package", () => {
    const newPack = createComponentPackage({
      pack: { componentId: "new_component_2" },
    });
    const { field } = addNewSubComponents(newPack, packField);
    expect(field["0"].componentId).toBe("new_component_1");
  });
  it("new state of component package has a location", () => {
    const newPack = createComponentPackage({
      pack: { componentId: "new_component_2" },
    });
    const { field } = addNewSubComponents(newPack, packField);
    expect(field["0.0"].location).toBe("0.0");
  });
  it("new component id is new_component_2", () => {
    const newPack = createComponentPackage({
      pack: { componentId: "new_component_2" },
    });
    const { field } = addNewSubComponents(newPack, packField);
    expect(field["0.0"].componentId).toBe("new_component_2");
  });
  it("new cmponent has correct subcomponents", () => {
    const newPack = createComponentPackage({
      pack: { componentId: "new_component_2" },
    });
    const { field } = addNewSubComponents(newPack, packField);
    expect(field["0"].subComponents.length).toEqual(1);
  });

  it("pack is correct", () => {
    const newPack = createComponentPackage({
      pack: { componentId: "new_component_2" },
    });
    const { pack } = addNewSubComponents(newPack, packField);
    expect(pack.componentId).toBe("new_component_1");
  });
});
