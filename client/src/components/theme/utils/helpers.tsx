import { Container } from "../../Container";

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
    componentId: "", //custom styleId
    defaultStyleId: defaultStyleId,
    styles: {
      className: "",
    },
    subComponents: [],
    ...props,
  };
};
export const getComponentPackage = ({
  allStyles,
  defaultId,
  componentId,
}: {
  allStyles: InitData;
  defaultId: string;
  componentId?: string;
}): ComponentPackage => {
  const defaultPackage = allStyles.defaultStyles[defaultId]
    ? allStyles.defaultStyles[defaultId]
    : {};
  const customPackage =
    componentId && allStyles.componentList[componentId]
      ? allStyles.componentList[componentId]
      : {};

  return {
    location: "",
    Component: Container,
    role: "wrapper",
    defaultStyleId: defaultId,
    componentId: componentId || "",
    subComponents: [],
    styles: {
      className: "",
    },
    ...defaultPackage,
    ...customPackage,
  };
};
