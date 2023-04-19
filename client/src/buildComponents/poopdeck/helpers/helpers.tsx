import { createComponentPackage } from "../../../components/theme/utils/helpers";
import { faker } from "@faker-js/faker";

export const createAsteroidBelt = (
  pack: ComponentPackage,
  componentList: ComponentPackageSet
) => {
  const { componentId = "" } = pack;

  const existingPack = componentList[componentId]
    ? componentList[componentId]
    : pack;

  let field = {
    [pack.location]: existingPack,
  };

  pack.subComponents.forEach((p: Partial<ComponentPackage>, i: number) => {
    const { componentId = "" } = p;

    const existingPack = componentList[componentId]
      ? componentList[componentId]
      : p;

    const subComponent = createComponentPackage({ pack: existingPack });

    field = { ...field, ...createAsteroidBelt(subComponent, componentList) };
  });

  return field;
};

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

export const uniqueId = () => faker.random.alphaNumeric(6);

export const createLocation = (parent: Partial<ComponentPackage>) => {
  const { location = undefined } = parent;
  if (!location) return uniqueId();
  if (location === null) return uniqueId();

  return location + "-" + (parent?.subComponents?.length || 0);
};

export const seedPack = (pack?: Partial<ComponentPackage>) =>
  createComponentPackage({
    pack: {
      label: `${pack?.label || "New Component"}`,
      children: ["Hello World :)"],
      ...pack,
    },
  });

export const updateField = (pack: ComponentPackage, packField: PackField) => {
  let field = { ...packField };
  field[pack.location] = pack;
  return field;
};

export const createDisplayState = (state?: Partial<DisplayStateShape>) => {
  const stored = sessionStorage.getItem("poopdeck-displayState");
  const parsed = stored ? JSON.parse(stored) : {};
  return {
    zoomLevel: -2,
    canvas: "fit-content",
    ...parsed,
    ...state,
  };
};
