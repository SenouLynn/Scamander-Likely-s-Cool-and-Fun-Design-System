import { useContext } from "react";
import { PoopDeckContext } from "pages/poopdeck/utils/context";
import { ThemeContext } from "./theme/ThemeProvider";
import { assembleStyles } from "./theme/utils/hooks/helpers";

//<--- Master Renderer: Highly load beaaring --->//
export const Render = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>
) => {
  const { get } = useContext(ThemeContext);
  const { field = null } = useContext(PoopDeckContext);
  //1.Theme styles
  let themePack = get.pack({
    componentId: pack.componentId || props.componentId || "container",
    location: pack.location || props.location || "container",
  }) as ComponentPackage;

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
