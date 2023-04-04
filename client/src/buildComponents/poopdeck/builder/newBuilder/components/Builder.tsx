import { useState } from "react";
import Meta from "./Meta";
import Content from "./Content";
import Styles from "./Styles";
import Children from "./Children";
// import ComponentMetaData from "./ComponentMetaData";
// import ComponentStyles from "./ComponentStyles";
// import SaveComponent from "./SaveComponent";
// import SubComponents from "./SubComponents";

export default function ComponentBuilder({ pack }: { pack: ComponentPackage }) {
  const [display, setDisplay] = useState<string | null>(null);

  const handleUpdate = () => {};

  return (
    <div className="padding-md border">
      <div className="flex-between-center">
        <h4>{pack.label}</h4>
        <span className="flex-end-center">
          <button onClick={() => setDisplay("styles")}>Styles</button>
          <button onClick={() => setDisplay("subComponents")}>
            SubComponents
          </button>
        </span>
      </div>
      <Meta pack={pack} />
      <Content pack={pack} />
      {display === "styles" && <Styles pack={pack} />}
      {display === "subComponents" && <Children pack={pack} />}
      {/* <SaveComponent {...props} /> */}
    </div>
  );
}
