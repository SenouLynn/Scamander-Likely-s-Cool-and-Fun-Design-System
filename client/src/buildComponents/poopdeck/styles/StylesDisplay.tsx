import Styles from "./Styles";
import { DisplayContext } from "./utils/context";
import { useDisplayContext } from "./utils/hooks";

export default function StylesDisplay(pack: ComponentPackage) {
  const value = useDisplayContext(pack);

  return (
    <DisplayContext.Provider value={value}>
      <Styles pack={pack} />
    </DisplayContext.Provider>
  );
}

