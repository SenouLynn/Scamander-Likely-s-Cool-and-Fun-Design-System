import { useState, useContext } from "react";
import { updateZoomLevel, updaters } from "./updaters";
import { useSetter as setters } from "./setters";
import {
  buildPack,
  createDisplayState,
  createLocalField,
  seedPack,
} from "./create";
import { useHotKey } from "../../../utils/hooks/hotkeys";
import { PoopDeckContext } from "./context";
import { ThemeContext } from "../../../_components/theme/ThemeProvider";

export const usePoopDeck = (
  props?: Partial<ComponentManager_New>
): ComponentManager_New => {
  const {
    field,
    setPack,
    setDisplayState,
    setField,
    setFocused,
    focused,
    pack,
    displayState,
  } = usePoopdeckState(props);

  const update = updaters(
    { field },
    { setPack, setField, setDisplayState, setFocused }
  );
  const save = setters({ field, focused }, update);
  console.log("field", field);
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

export const usePoopdeckState = (props?: Partial<ComponentManager_New>) => {
  const { themeField } = useContext(ThemeContext);
  const seed = props?.pack || themeField["seedComponent"] || seedPack();
  const [pack, setPack] = useState(buildPack({ pack: seed }));

  const [field, setField] = useState(
    createLocalField(pack, themeField, props?.field)
  );
  const [displayState, setDisplayState] = useState(createDisplayState());
  const [focused, setFocused] = useState(pack);
  return {
    focused: field[focused.location],
    pack: field[pack.location],
    field,
    displayState,
    setPack,
    setField,
    setDisplayState,
    setFocused,
  };
};

export const usePoopDeckHotKeys = () => {
  const { update, save, displayState, pack } = useContext(PoopDeckContext);
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
    return save.local(pack);
  });
};
