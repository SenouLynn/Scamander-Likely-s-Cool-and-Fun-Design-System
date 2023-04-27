import { createBilgeDeckContext } from "./context";
import { deletePack } from "./db";

export const useBilgeDeck = ({
  pack,
  field,
}: {
  pack?: ComponentPackage;
  field?: ComponentPackageSet;
}) => {
  return createBilgeDeckContext({ field });
};
