import { useContext, useEffect, useState } from "react";
import { createAsteroidBelt } from "./helpers";
import { ThemeContext } from "../../../components/theme/ThemeContext";

export const useComponentManager = (seedPack: ComponentPackage) => {
  let { componentList } = useContext(ThemeContext);
  let [masterPack, setMasterPack] = useState<ComponentPackage>(seedPack);
  let [masterPackField, setMasterPackField] = useState<{
    [key: string]: ComponentPackage;
  }>(createAsteroidBelt(masterPack, componentList));

  
  const updaters = {
    masterPack: (p: ComponentPackage) => {
      setMasterPack(p);
    },

    field: (p: ComponentPackage, parent?: ComponentPackage) => {
      let field = { ...masterPackField };
      field[p.location] = p;
      if (parent) field[parent.location] = parent; //<-- ;)
      console.log("pack", p, field);
      setMasterPackField(field);
    },
  };

  useEffect(() => {
    setMasterPack(masterPackField["0"]);
  }, [masterPackField["0"]]);
  return {
    original: seedPack,
    pack: masterPack,
    updaters,
    field: masterPackField,
  };
};
