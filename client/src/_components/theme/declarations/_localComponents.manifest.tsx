import { Render } from "../../Render";

//Component Package Components

export const Components = {
  NavItem: (props: ComponentProps) =>
    Render(props, {
      location: "nav_item",
      componentId: "",
    }),
  Container: (props: ComponentProps) =>
    Render(props, {
      location: "container",
      componentId: "",
    }),
  Navbar: (props: ComponentProps) =>
    Render(props, {
      location: "nav_wrapper",
      componentId: "",
    }),
  BlackBox: (props: ComponentProps) =>
    Render(props, {
      location: "black_box",
      componentId: "black_box",
    }),
};

export default {
  NavItem: Components.NavItem,
  Container: Components.Container,
  Navbar: Components.Navbar,
  BlackBox: Components.BlackBox,
};
