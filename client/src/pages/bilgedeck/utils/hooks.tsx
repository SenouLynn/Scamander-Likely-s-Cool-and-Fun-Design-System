import { useContext } from "react";
import { createBilgeDeckContext } from "./context";
import { addPack, deletePack } from "./db";
import { ThemeContext } from "_components/theme/ThemeProvider";

export const useBilgeDeck = ({
  pack,
  field,
}: {
  pack?: ComponentPackage;
  field?: ComponentPackageSet;
}) => {
  const { set } = useContext(ThemeContext);
  const base = createBilgeDeckContext({ field });

  return {
    ...base,
    update: {
      deletePack: async (pack: ComponentPackage) => {
        const res = await deletePack(pack);
        set.deletePack(pack);
      },
      updatePack: () => {},
      addPack: async (pack: ComponentPackage) => {
        const res = await addPack(pack);
        console.log("RES", res);
        set.field(res.data);
      },
    },
  };
};
