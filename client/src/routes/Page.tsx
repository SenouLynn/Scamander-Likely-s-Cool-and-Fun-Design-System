import { useContext } from "react";
import { ThemeContext } from "../components/theme/ThemeContext";
import { assembleStyles } from "../components/theme/utils/helpers";
import { PoopDeckContext } from "../buildComponents/poopdeck/NewPoopDeck";

export const Page = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>
) => {
  const { field = null } = useContext(PoopDeckContext);
  const { pages } = useContext(ThemeContext);
  //Styles

  //1.Theme styles
  let p = pages({
    componentId: pack.componentId || "container",
    defaultStyleId: pack.defaultStyleId || "container",
  });
  //2. Build styles for
  const page = assembleStyles({ props, componentPackage: p });

  //3. If package is passed through props, override default package from teheme
  let packOverride = { ...p, ...pack };

  //4. If is being edited, update the state
  if (field) packOverride = { ...packOverride, ...field[pack.location || "0"] };
  //Add built styles to built package
  const finalPackage = { ...packOverride, styles: page.styles };

  return <>{finalPackage.render({ props, pack: finalPackage })}</>;
};
