import { useState, useContext } from "react";
import { updateZoomLevel, updaters } from "./updaters";
import { createComponentPackage } from "../../../_components/_theme/utils/helpers";
import { seedPack } from "../../poopdeck/utils/helpers";
import { useSetter as setters } from "./setters";
import { createDisplayState, createLocalField } from "./create";
import { useHotKey } from "../../../utils/hooks/hotkeys";
import { PoopDeckContext } from "./context";
import { ThemeContext } from "../../../_components/theme_2.0/ThemeProvider";

export const usePoopDeck = (
  props?: Partial<ComponentManager_New>
): ComponentManager_New => {
  const { themeField } = useContext(ThemeContext);
  const [pack, setPack] = useState(
    createComponentPackage({ pack: props?.pack })
  );

  const [field, setField] = useState(
    createLocalField(pack, themeField, props?.field)
  );
  const [displayState, setDisplayState] = useState(createDisplayState());
  const [focused, setFocused] = useState(pack);

  const update = updaters(
    { field },
    { setPack, setField, setDisplayState, setFocused }
  );
  const save = setters({ field, pack }, { setPack, setField });

  return {
    original: {} as ComponentPackage,
    pack,
    focused,
    update,
    save,
    field,
    displayState,
  };
};

export const usePoopDeckHotKeys = () => {
  const { update, save, displayState } = useContext(PoopDeckContext);
  useHotKey("n", () =>
    update.pack(seedPack({ location: "0", type: "component" }))
  );
  useHotKey("minus", () => {
    console.log("minus");
    update.displayState(
      createDisplayState({
        zoomLevel: updateZoomLevel("sub", displayState.zoomLevel),
      })
    );
  });

  useHotKey("equal", () => {
    return update.displayState(
      createDisplayState({
        zoomLevel: updateZoomLevel("add", displayState.zoomLevel),
      })
    );
  });

  useHotKey("cmd + s", () => {
    return save.local();
  });
};
