import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import {
  createComponentPackage as pack,
  DefaultComponent,
} from "./theme/utils/helpers";
const Components = {
  NavItem: (props: ComponentProps) =>
    DefaultComponent(props, {
      defaultStyleId: "nav_item",
      componentId: "",
    }),
  Container: (props: ComponentProps) =>
    DefaultComponent(props, {
      defaultStyleId: "container",
      componentId: "",
    }),
  Navbar: (props: ComponentProps) =>
    DefaultComponent(props, {
      defaultStyleId: "nav_wrapper",
      componentId: "",
    }),
};

export default {
  NavItem: Components.NavItem,
  Container: Components.Container,
  Navbar: Components.Navbar,
};
