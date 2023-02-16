import { useContext } from "react";
import ComponentWrapper from "./controlPanel/ComponentWrapper";
import { ThemeContext } from "./theme/ThemeContext";

export const Navbar = (props: ComponentProps) => {
  const { componentPackage } = useContext(ThemeContext);
  const cartridge = componentPackage({
    defaultId: "row",
    componentId: "nav_wrapper",
  });

  console.log(cartridge);
  return <ComponentWrapper {...cartridge}>{props.children}</ComponentWrapper>;
};
