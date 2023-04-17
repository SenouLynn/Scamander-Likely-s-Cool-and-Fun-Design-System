import { useContext } from "react";
import { PoopDeckContext } from "../PoopDeck";

export default function Save() {
  const { updaters } = useContext(PoopDeckContext);

  return (
    <div>
      <button onClick={updaters.saveLocal}>Save Local</button>
      <button onClick={updaters.saveDb}>Save Db</button>
    </div>
  );
}
