import { useContext } from "react";
import ComponentWrapper from "./theme/ComponentWrapper";
import { ThemeContext } from "./theme/ThemeContext";
export const Container = (props: ComponentProps) => {
  const { componentPackage } = useContext(ThemeContext);

  //TODO: Mash together props and componentPackage. Classes not passing,
  const { componentId = "" } = props;
  const pack = componentPackage({
    defaultId: "container",
    componentId,
  });

  const packWithProps = {
    ...pack,
    styles: {
      ...props,
      ...pack.styles,
    },
  };
  const cartridge = {
    ...packWithProps,
    styles: {
      ...packWithProps.styles,
      ...props.styles,
      className: `${packWithProps.styles.className} ${props.className}`,
    },
  };
  return <ComponentWrapper {...cartridge}>{props.children}</ComponentWrapper>;
};
