import { useState, useContext } from "react";
import Meta from "./Meta";
import Content from "./Content";
import Styles from "./Styles";
import Children from "./Children";
import { PoopDeckContext } from "../NewPoopDeck";
// import ComponentMetaData from "./ComponentMetaData";
// import ComponentStyles from "./ComponentStyles";
// import SaveComponent from "./SaveComponent";
// import SubComponents from "./SubComponents";

export default function ComponentBuilder({ pack }: { pack: ComponentPackage }) {
  const { field } = useContext(PoopDeckContext);
  const [display, setDisplay] = useState<string | null>(null);
  const component = field[pack.location];
  const handleUpdate = () => {};

  return (
    <div className="padding-md border">
      <div className="flex-between-center">
        <h4>{component.label}</h4>
        <span className="flex-end-center">
          <button onClick={() => setDisplay("styles")}>Styles</button>
          <button onClick={() => setDisplay("subComponents")}>
            SubComponents
          </button>
        </span>
      </div>
      <Meta pack={component} />
      <Content pack={component} />
      {display === "styles" && <Styles pack={component} />}
      {display === "subComponents" && <Children pack={component} />}
      {/* <SaveComponent {...props} /> */}
    </div>
  );
}
