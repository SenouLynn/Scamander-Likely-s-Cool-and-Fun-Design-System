import { useContext } from "react";
import ComponentWrapper from "./theme/ComponentWrapper";
import { ThemeContext } from "./theme/ThemeContext";
import { addPropsToCartridge } from "./theme/utils/addPropstoCartridge";

export const Navbar = (props: ComponentProps) => {
  const { componentPackage } = useContext(ThemeContext);
  const cartridge = addPropsToCartridge({
    componentPackage: componentPackage({
      defaultId: "row",
      componentId: "nav_wrapper",
    }),
    props,
  });

  return <ComponentWrapper {...cartridge}>{props.children}</ComponentWrapper>;
};
