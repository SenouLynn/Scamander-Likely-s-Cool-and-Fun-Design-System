import { useContext, useEffect, useState } from "react";
import C from "../../../components/_localComponents.manifest";
import ControlPanel from "../../controlPanel/ControlPanel";
import { updateDb } from "../../../components/theme/query/utils/updaters";
import { ThemeContext } from "../../../components/theme/ThemeContext";
import { createComponentPackage } from "../../../components/theme/utils/helpers";
import AddChild from "./AddChild";

export default function CreateComponent() {
  const { setOpenComponents, openComponents, componentList } =
    useContext(ThemeContext);

  const [pack, setPack] = useState(
    createComponentPackage({
      props: {},
      pack: {
        label: "Yo",
        componentId: "test_component",
        children: [],
        styles: {
          className: "border h-10rem w-10rem",
        },
      },
    })
  );

  const Pack = (props: ComponentProps) => {
    const p = createComponentPackage({
      props,
      pack: { ...pack, ...componentList["test_component"] },
    });
    return <>{p.render({ props, pack: p })}</>;
  };

  const handleClick = () => {
    // updateDb("updateStyle", pack);
  };

  useEffect(() => {
    setOpenComponents({
      [pack.componentId]: createComponentPackage({
        props: {},
        pack: { ...pack, ...componentList["test_component"] },
      }),
    });
  }, []);

  return (
    <C.Container className="flex-column">
      <C.Container>
        <form>
          <input
            type={"text"}
            value={pack.label}
            onChange={(e) => setPack({ ...pack, label: e.target.value })}
            placeholder={"Component Name"}
          />
          <input
            type={"text"}
            value={pack.componentId}
            onChange={(e) => setPack({ ...pack, componentId: e.target.value })}
            placeholder={"Component Id"}
          />
          <input
            type={"text"}
            value={pack.styles.className}
            onChange={(e) =>
              setPack({
                ...pack,
                styles: { ...pack.styles, className: e.target.value },
              })
            }
            placeholder={"Classes"}
          />
        </form>
        <ControlPanel />
        <AddChild {...pack} />
      </C.Container>
      <Pack>Yo</Pack>
      <button onClick={handleClick}>Save New Component</button>
    </C.Container>
  );
}
