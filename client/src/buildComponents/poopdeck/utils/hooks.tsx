import { useContext, useEffect, useState } from "react";
import { PoopDeckContext } from "../context";
import { saveComponentToDb } from "./dB";
import {
  createAsteroidBelt,
  createDisplayState,
  createLocation,
} from "./helpers";

import { useHotKey } from "../../../utils/hooks/hotkeys";
import { seedPack } from "./helpers";
import { updateZoomLevel } from "./displayState";
import { ThemeContext } from "../../../_components/theme_2.0/ThemeProvider";

export const useComponentManager = (
  seedPack: ComponentPackage
): ComponentManager => {
  let { themeField, set } = useContext(ThemeContext);

  let [displayState, setDisplayState] = useState(createDisplayState());
  let [masterPack, setMasterPack] = useState<ComponentPackage>(seedPack);
  let [focusedComponent, setFocusedComponent] =
    useState<ComponentPackage>(masterPack);
  let [masterPackField, setMasterPackField] = useState<ComponentPackageSet>(
    createAsteroidBelt(masterPack, themeField)
  );

  //Methods
  const updaters = {
    masterPack: (p: ComponentPackage) => {
      setFocusedComponent(p);
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
      set.field(validPack);
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
      setMasterPackField(createAsteroidBelt(pack, themeField));
    },
    updateDisplayState: (state: { [key: string]: any }) => {
      console.log("updateDisplayState", state);
      sessionStorage.setItem("poopdeck-displayState", JSON.stringify(state));
      setDisplayState({ ...displayState, ...state });
    },
    updateFocusedState: (pack: ComponentPackage) => {
      setFocusedComponent(pack);
    },
    deleteComponent: (pack: ComponentPackage) => {
      let field = { ...masterPackField };
      const parents = Object.values(field).reduce(
        (acc: any[], p: ComponentPackage) => {
          let adder = acc;
          let children = p.subComponents.filter((x) => {
            x.location?.includes(pack.location);
          });

          return adder;
        },
        []
      );
      console.log(pack, parents);
      delete field[pack.location];
      setMasterPackField(field);
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
    focusedComponent,
  };
};

export const usePoopDeckHotKeys = () => {
  const { updaters, displayState } = useContext(PoopDeckContext);
  useHotKey("n", () =>
    updaters.masterPack(seedPack({ location: "0", type: "component" }))
  );
  useHotKey("minus", () => {
    console.log("minus");
    updaters.updateDisplayState(
      createDisplayState({
        zoomLevel: updateZoomLevel("sub", displayState.zoomLevel),
      })
    );
  });

  useHotKey("equal", () => {
    return updaters.updateDisplayState(
      createDisplayState({
        zoomLevel: updateZoomLevel("add", displayState.zoomLevel),
      })
    );
  });

  useHotKey("cmd + s", () => {
    return updaters.saveLocal();
  });
};
