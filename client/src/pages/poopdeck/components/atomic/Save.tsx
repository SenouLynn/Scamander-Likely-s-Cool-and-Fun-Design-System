import { useContext } from "react";
import { PoopDeckContext } from "../../utils/context";
export default function Save() {
  const { save } = useContext(PoopDeckContext);

  return (
    <div>
      <button onClick={save.local}>Save Local</button>
      <button onClick={save.db}>Save Db</button>
    </div>
  );
}
