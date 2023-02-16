import { useContext, useState } from "react";
import { createStyles } from "../utils/styles/createStyles";
import ComponentWrapper from "./controlPanel/ComponentWrapper";
import { ThemeContext } from "./theme/ThemeContext";
import { getComponentPackage } from "./theme/utils/helpers";
export const Container = (props: ComponentProps) => {
  const { componentPackage } = useContext(ThemeContext);

  const { componentId = "" } = props;
  const cartridge = componentPackage({
    defaultId: "container",
    componentId,
  });
  return <ComponentWrapper {...cartridge}>{props.children}</ComponentWrapper>;
};
