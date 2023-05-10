import { useContext } from "react";
import { PoopDeckContext } from "../../utils/context";
export default function Save() {
  const { save, pack } = useContext(PoopDeckContext);

  return (
    <div>
      <button onClick={() => save.local(pack)}>Save Local</button>
      <button onClick={() => save.db(pack)}>Save Db</button>
    </div>
  );
}
