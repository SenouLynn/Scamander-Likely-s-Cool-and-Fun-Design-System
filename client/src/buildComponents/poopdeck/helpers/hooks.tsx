import { useContext, useEffect, useState } from "react";
import { createAsteroidBelt, createLocation } from "./helpers";
import { ThemeContext } from "../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../components/theme/utils/helpers";
import { saveComponentToDb } from "./dB";

export const useComponentManager = (
  seedPack: ComponentPackage
): ComponentManager => {
  let { componentList, setComponentList } = useContext(ThemeContext);
  let [displayState, setDisplayState] = useState({ zoomLevel: -2 });
  let [masterPack, setMasterPack] = useState<ComponentPackage>(seedPack);
  let [masterPackField, setMasterPackField] = useState<ComponentPackageSet>(
    createAsteroidBelt(masterPack, componentList)
  );

  const updaters = {
    masterPack: (p: ComponentPackage) => {
      console.log(p)
      updaters.field(p);
      setMasterPack(p);
    },
    field: (p: ComponentPackage, parent?: ComponentPackage) => {
      let field = { ...masterPackField };
      field[p.location] = p;
      if (parent) field[parent.location] = parent; //<-- ;)
      setMasterPackField(field);
    },
    saveLocal: () => {
      //Store new vals
      let validPack = masterPack;
      let validField = masterPackField;

      //Clean add new unique comonent id if component is fresh
      if (masterPack.location === "0") {
        const location = createLocation({});
        validPack = { ...masterPack, location, componentId: location };
        //Clean valid field values of leading 0 and replace with new location
        validField = Object.values(validField).reduce(
          (acc: ComponentPackageSet, pack: ComponentPackage) => {
            const p = acc;

            let childLocation = pack.location.split("-");
            if (childLocation[0] === "0") {
              childLocation[0] = location;
              const newLocation = childLocation.join("-");
              p[newLocation] = { ...pack, location: newLocation };
              delete p[pack.location];
            }
            return p;
          },
          validField
        );

        validField = { ...masterPackField, [location]: validPack };
      }

      //Update everything (order matters)
      setComponentList(validPack);
      setMasterPackField(validField);
      updaters.masterPack(validPack);

      //Remove 0 from field + pass to db updater if needed
      delete validField["0"];
      return { pack: validPack, field: validField };
    },
    saveDb: () => {
      const { pack: validPack, field: validField } = updaters.saveLocal();
      saveComponentToDb({ pack: validPack, field: validField });
    },
    updateFocus: (pack: ComponentPackage) => {
      updaters.masterPack(pack);
      setMasterPackField(createAsteroidBelt(pack, componentList));
    },
    updateDisplayState: (state: { [key: string]: any }) => {
      console.log(state);
      setDisplayState({ ...displayState, ...state });
    },
  };

  useEffect(() => {
    setMasterPack(masterPackField[masterPack.location]);
  }, [masterPackField[masterPack.location]]);

  return {
    original: seedPack,
    pack: masterPack,
    updaters,
    field: masterPackField,
    setDisplayState,
    displayState,
  };
};
