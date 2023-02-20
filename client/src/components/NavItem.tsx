import { useContext } from "react";
import ComponentWrapper from "./theme/ComponentWrapper";
import { ThemeContext } from "./theme/ThemeContext";
import { addPropsToCartridge } from "./theme/utils/addPropstoCartridge";

export const NavItem = (props: ComponentProps) => {
  const { componentPackage, componentList } = useContext(ThemeContext);
  const cartridge = addPropsToCartridge({
    componentPackage: componentPackage({
      defaultId: "",
      componentId: "nav_item",
    }),
    props,
  });
  return <ComponentWrapper {...cartridge}>{props.children}</ComponentWrapper>;
};
