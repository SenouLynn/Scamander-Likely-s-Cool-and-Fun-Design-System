import { useContext } from "react";
import { ThemeContext } from "./_theme/ThemeContext";
import { assembleStyles } from "./_theme/utils/helpers";
import { PoopDeckContext } from "../buildComponents/poopdeck/context";

//<--- Master Renderer: Highly load bearing --->//
export const Render = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>
) => {
  const { componentPackage } = useContext(ThemeContext);
  const { field = null } = useContext(PoopDeckContext);
  //1.Theme styles
  let themePack = componentPackage({
    componentId: pack.componentId || props.componentId || "container",
    defaultStyleId: pack.defaultStyleId || props.defaultStyleId || "container",
  });

  let { pack: packOverride } = buildRenderPackage({
    pack,
    props,
    theme: themePack,
  });
  //5.If being edited in PoopDeck, override package with local field value
  if (field && pack.location && Object.keys(field).includes(pack?.location))
    packOverride = { ...packOverride, ...field[pack.location || "0"] };

  return <>{packOverride.render({ props, pack: packOverride })}</>;
};

export const buildRenderPackage = ({
  pack,
  props,
  theme,
}: {
  pack: Partial<ComponentPackage>;
  props: ComponentProps;
  theme: ComponentPackage;
}) => {
  //2.Build styles for
  const styledPack = assembleStyles({ props, componentPackage: theme });

  //3.If package is passed through props, override default package from teheme
  let packOverride = { ...theme, ...pack };

  //4.Add built styles to built package
  packOverride = { ...packOverride, styles: styledPack.styles };

  return {
    pack: packOverride,
  };
};
