import { useContext, useState } from "react";
import { createStyles } from "../utils/styles/createStyles";
import ComponentWrapper from "./controlPanel/ComponentWrapper";
import { ThemeContext } from "./theme/ThemeContext";
import { getComponentPackage } from "./theme/utils/helpers";
export const Container = (props: ComponentProps) => {
  const { component = "" } = props;
  const componentPackage = getComponentPackage({
    defaultId: "container",
    component,
  });
  return (
    <ComponentWrapper {...componentPackage}>{props.children}</ComponentWrapper>
  );
};
