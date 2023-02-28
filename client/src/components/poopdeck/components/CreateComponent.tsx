import { useContext, useEffect, useState } from "react";
import C from "../../components.manifest";
import ControlPanel from "../../theme/controlPanel/ControlPanel";
import { updateDb } from "../../theme/query/utils/updaters";
import { ThemeContext } from "../../theme/ThemeContext";
import { createComponentPackage } from "../../theme/utils/helpers";

export default function CreateComponent() {
  const { setOpenComponents } = useContext(ThemeContext);
  const [pack, setPack] = useState({
    label: "Yo",
    componentId: "test_component",
    children: [],
    styles: {
      className: "border h-10rem w-10rem",
    },
  });

  const Pack = (props: ComponentProps) => {
    const p = createComponentPackage({ props, pack });
    return <>{p.render({ props, pack: p })}</>;
  };

  const handleClick = () => {
    updateDb("updateStyle", pack);
  };

  useEffect(() => {
    setOpenComponents({
      [pack.componentId]: createComponentPackage({ props: {}, pack }),
    });
  }, []);
  return (
    <C.Container>
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
      </C.Container>
      <Pack>Yo</Pack>
      <button onClick={handleClick}>Save New Component</button>
    </C.Container>
  );
}
