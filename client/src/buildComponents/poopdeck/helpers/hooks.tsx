import { useContext, useEffect, useState } from "react";
import { createAsteroidBelt } from "./helpers";
import { ThemeContext } from "../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../components/theme/utils/helpers";
import { saveComponentToDb } from "./dB";

export const useComponentManager = (seedPack: ComponentPackage) => {
  let { componentList, setComponentList } = useContext(ThemeContext);
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
      setMasterPackField(field);
    },
    save: () => {
      //Need to set up store/differentiate between fild and components
      saveComponentToDb({ payload: masterPack });
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
