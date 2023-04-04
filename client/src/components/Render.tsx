import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { assembleStyles } from "./theme/utils/helpers";
import { PoopDeckContext } from "../buildComponents/poopdeck/NewPoopDeck";
//<--- Master Renderer: Highly load bearing --->//
export const Render = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>
) => {
  const { componentPackage } = useContext(ThemeContext);
  const { field = null } = useContext(PoopDeckContext);
  //Styles

  //1.Theme styles
  let p = componentPackage({
    componentId: pack.componentId || props.componentId || "container",
    defaultStyleId: pack.defaultStyleId || props.defaultStyleId || "container",
  });

  //2.Build styles for
  const page = assembleStyles({ props, componentPackage: p });

  //If package is passed through props, override default package from teheme
  let packOverride = { ...p, ...pack };

  //4. If is being edited, update the state
  // if (field) packOverride = { ...packOverride, ...field[pack.location || "0"] };

  //Add built styles to built package
  const finalPackage = { ...packOverride, styles: page.styles };

  return <>{finalPackage.render({ props, pack: finalPackage })}</>;
};
