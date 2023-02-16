import { useContext } from "react";
import ComponentWrapper from "./controlPanel/ComponentWrapper";
import { ThemeContext } from "./theme/ThemeContext";

export const NavItem = (props: ComponentProps) => {
  const { componentPackage } = useContext(ThemeContext);
  const cartridge = componentPackage({
    defaultId: "col",
    componentId: "nav_item",
  });
  return <ComponentWrapper {...cartridge}>{props.children}</ComponentWrapper>;
};
