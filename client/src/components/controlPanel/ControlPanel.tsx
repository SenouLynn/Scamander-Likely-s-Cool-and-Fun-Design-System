import { useContext } from "react";
import { Container } from "../Container";
import { ThemeContext } from "../theme/ThemeContext";
import GenericOptions from "./components/GenericOptions";
import WrapperOptions from "./components/WrapperOptions";

export default function ControlPanel(props: ComponentPackage) {
  const {
    setOpenComponents,
    updateComponentStyle,
    openComponents,
    controlOptions,
  } = useContext(ThemeContext);
  const currentComponentId: string = Object.keys(openComponents)[0];

  const handleClick = ({
    style,
    variant,
  }: {
    style: string;
    variant: string;
  }) => {
    let p: any = { ...openComponents[currentComponentId] };
    p[style] = variant;
    updateComponentStyle({ type: "custom", styles: p, id: currentComponentId });
  };

  return (
    <div onDoubleClick={() => setOpenComponents("")}>
      <Container
        display="flex"
        margin={"md"}
        className="flex-start-start flex-column"
      >
        <div>
          <h4>Custom: {openComponents[currentComponentId].label}</h4>
          <WrapperOptions
            componentPackage={openComponents[currentComponentId]}
            controlOptions={controlOptions}
          />
          <GenericOptions
            componentPackage={openComponents[currentComponentId]}
            controlOptions={controlOptions}
          />
        </div>
      </Container>
    </div>
  );
}
