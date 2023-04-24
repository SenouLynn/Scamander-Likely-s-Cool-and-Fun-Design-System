import { createComponentPackage } from "../../../../_components/_theme/utils/helpers";
import { createLocation } from "../../utils/helpers";

const grandDad = createComponentPackage({ pack: {} });
const grandMom = createComponentPackage({});
const pack = createComponentPackage({
  pack: { location: createLocation(grandMom) },
});
const sibbling = createComponentPackage({
  pack: { location: createLocation(grandDad) },
});
const child = createComponentPackage({
  pack: { location: createLocation(pack) },
});
const cousin = createComponentPackage({
  pack: { location: createLocation(sibbling) },
});

const field = {
  [grandDad.location]: { ...grandDad, subComponents: [pack] },
  [pack.location]: { ...pack, subComponents: [child] },
  [sibbling.location]: { ...sibbling, subComponents: [child] },
  [child.location]: child,
  [cousin.location]: cousin,
};
const createParentLocation = (location: string): string => {
  let string = location.split("-");
  if (string.length === 1) {
    //pack is root
    location;
  }
  if (string.length === 2) {
    //pack is child, parent is root
    location;
  }
  if (string.length > 2) {
    //pack is child, parent is not root
    string.pop();
    return string.join("-");
  }
  return string.join("-");
};
export const deleteComponentFromField = (
  pack: ComponentPackage,
  field: ComponentPackageSet
) => {
  let newField = { ...field };
  //Delete pack from field
  delete newField[pack.location];

  //Delete all children from field
  pack.subComponents.forEach((p: ComponentPackage) => {
    delete newField[p.location];
  });

  //Find parent and remove pack from subComponents

  const parentLocation = createParentLocation(pack.location); //.slice(0, -1).join("-");
  const parent = newField[parentLocation];
  //   const newParent = {
  //     ...parent,
  //     subComponents: parent.subComponents.filter(
  //       (p: ComponentPackage) => p.location !== pack.location
  //     ),
  //   };
  console.log("parentLocation", pack, parentLocation);

  return newField;
};

describe("delete component", () => {
  it("is happy :)", () => {
    expect(true).toBe(true);
  });
  it("it removes pack in the field", () => {
    expect(deleteComponentFromField(pack, field)[pack.location]).toBeFalsy();
  });
  it("it removes children in the field", () => {
    expect(
      deleteComponentFromField(field[pack.location], field)[child.location]
    ).toBeFalsy();
  });
  // it("removes pack from parent subComponents", () => {
  //   expect(
  //     deleteComponentFromField(field[pack.location], field)[grandDad.location]
  //       .subComponents
  //   ).not.toContain(pack);
  // });

  //Remove pack from parent subComponents
  //Remove all descendants from field
});
