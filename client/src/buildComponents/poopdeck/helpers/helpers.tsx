import { createComponentPackage } from "../../../components/theme/utils/helpers";
import { faker } from "@faker-js/faker";

export const createAsteroidBelt = (
  pack: ComponentPackage,
  componentList: DbStyleObject
) => {

  let field = pack.subComponents.reduce(
    (
      acc: {
        [key: string]: ComponentPackage;
      },
      p: Partial<ComponentPackage>,
      i: number
    ) => {
      const { componentId = "", location = "0" } = p;
      
      const existingPack = componentList[componentId]
        ? componentList[componentId]
        : p;

      acc[location] = createComponentPackage({
        pack: existingPack,
      });

      return acc;
    },
    {}
  );

  pack.subComponents.forEach((p: Partial<ComponentPackage>, i: number) => {
    const subComponent = createComponentPackage({ pack: p });
    field = { ...field, ...createAsteroidBelt(subComponent, componentList) };
  });

  return {
    [pack.location]: pack,
    ...field,
  };
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
