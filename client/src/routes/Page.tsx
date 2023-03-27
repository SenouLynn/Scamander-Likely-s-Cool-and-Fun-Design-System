import { useContext } from "react";
import { ThemeContext } from "../components/theme/ThemeContext";
import { assembleStyles } from "../components/theme/utils/helpers";

export const Page = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>
) => {
  const { pages, pagesList } = useContext(ThemeContext);
  //Styles

  //1.Theme styles
  let p = pages({
    componentId: pack.componentId || "container",
    defaultStyleId: pack.defaultStyleId || "container",
  });
  //2.Build styles for
  const page = assembleStyles({ props, componentPackage: p });
  //If package is passed through props, override default package from teheme
  const packOverride = { ...p, ...pack };

  //Add built styles to built package
  const finalPackage = { ...packOverride, styles: page.styles };

  return <>{finalPackage.render({ props, pack: finalPackage })}</>;
};
