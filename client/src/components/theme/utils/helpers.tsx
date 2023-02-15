import { Container } from "../../Container";
import { componentManifest } from "../utils/fakeDb/component.manifest";
import { customComponents } from "../utils/fakeDb/mockDb.manifest";

export const renderChildren = (props: ComponentProps) => {
  return props.subComponents && props.subComponents.length > 0 ? (
    props.subComponents.map((x: ComponentProps) => {
      if (x.Component) return <x.Component {...x} />;
    })
  ) : (
    <>{props.children}</>
  );
};

export const createComponentPackage = ({
  defaultStyleId = "container",
  ...props
}: AtLeast<ComponentPackage, "defaultStyleId">): ComponentPackage => {
  return {
    location: "", //tree location
    Component: Container,
    role: "wrapper",
    component: "", //custom styleId
    defaultStyleId: defaultStyleId,
    styles: {
      className: "",
    },
    subComponents: [],
    ...props,
  };
};
export const getComponentPackage = ({
  defaultId,
  component,
}: {defaultId: string, component: string}): ComponentPackage => {
  const defaultPackage = componentManifest[defaultId]
    ? componentManifest[defaultId]
    : {};
  const customPackage = customComponents[component]
    ? customComponents[component]
    : {};

  return {
    location: "",
    Component: Container,
    role: "wrapper",
    defaultStyleId: defaultId,
    component: component,
    subComponents: [],
    styles: {
      className: "",
    },
    ...defaultPackage,
    ...customPackage,
  };
};
