import { Render } from "./Render";

//Component Package Components

const Components = {
  NavItem: (props: ComponentProps) =>
    Render(props, {
      defaultStyleId: "nav_item",
      componentId: "",
    }),
  Container: (props: ComponentProps) =>
    Render(props, {
      defaultStyleId: "container",
      componentId: "",
    }),
  Navbar: (props: ComponentProps) =>
    Render(props, {
      defaultStyleId: "nav_wrapper",
      componentId: "",
    }),
  BlackBox: (props: ComponentProps) =>
    Render(props, {
      defaultStyleId: "black_box",
      componentId: "black_box",
    }),
};

export default {
  NavItem: Components.NavItem,
  Container: Components.Container,
  Navbar: Components.Navbar,
};
