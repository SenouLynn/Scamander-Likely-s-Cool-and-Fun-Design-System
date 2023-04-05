import { useContext } from "react";
import { PoopDeckContext } from "../PoopDeck";

export default function Save() {
  const { updaters } = useContext(PoopDeckContext);
  const handleSave = () => {
    console.log("save");
  };
  return (
    <div>
      <button onClick={updaters.save}>Save New Component</button>
      <button>Overwrite Existing Component</button>
    </div>
  );
}
