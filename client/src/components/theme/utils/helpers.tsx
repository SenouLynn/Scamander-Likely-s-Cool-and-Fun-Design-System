import { useContext } from "react";
import Components from "../../components.manifest";
import ComponentWrapper from "../ComponentWrapper";
import { ThemeContext } from "../ThemeContext";

export const DefaultComponent = (
  props: ComponentProps,
  componentIds: ComponentIds
) => {
  const { componentPackage } = useContext(ThemeContext);
  const p = createComponentPackage({
    props,
    pack: componentPackage(componentIds),
  });
  return <>{p.render({ props, pack: p })}</>;
};

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
  props,
  pack,
}: {
  props: ComponentProps;
  pack: Partial<ComponentPackage>;
}): ComponentPackage => {
  let component = {
    location: "",
    label: "",
    Component: Components.Container,
    componentId: "",
    defaultStyleId: "",
    styles: {
      className: "",
    },
    subComponents: [],
    render: (props: ComponentWrapperProps) => {
      return (
        <ComponentWrapper {...props}>
          {renderChildren(props.props)}
        </ComponentWrapper>
      );
    },
    ...pack,
  };

  return component;
};

export const getComponentPackage = ({
  allStyles,
  defaultStyleId,
  componentId,
}: {
  allStyles: InitData;
  defaultStyleId: string;
  componentId?: string;
}): ComponentPackage => {
  const defaultPackage = allStyles.defaultStyles[defaultStyleId]
    ? allStyles.defaultStyles[defaultStyleId]
    : {};
  const customPackage =
    componentId && allStyles.componentList[componentId]
      ? allStyles.componentList[componentId]
      : {};

  return {
    location: "",
    label: "",
    Component: Components.Container,
    role: "wrapper",
    defaultStyleId: defaultStyleId,
    componentId: componentId || "",
    subComponents: [],
    styles: {
      className: "",
    },
    render: (props: ComponentWrapperProps) => (
      <ComponentWrapper {...props}>
        {renderChildren(props.props)}
      </ComponentWrapper>
    ),
    ...defaultPackage,
    ...customPackage,
  };
};

export const createComponentProps = ({
  componentIds,
  getComponentPackage,
  props,
}: BuildComponentIds) => {
  const cartridge = getComponentPackage({ ...componentIds, ...props });
  return {
    ...cartridge,
    children: props.children,
    styles: {
      ...props,
      ...cartridge.styles,
      className: [cartridge.styles.className, props.className].join(" "),
    },
  };
};

export const addPropsToCartridge = ({
  props,
  componentPackage,
}: {
  props: ComponentProps;
  componentPackage: ComponentPackage;
}) => {
  const cartridge = {
    ...componentPackage,
    styles: {
      ...props,
      ...componentPackage.styles,
      className: `${
        componentPackage.styles.className
          ? componentPackage.styles.className
          : ""
      } ${props.className ? props.className : ""}`,
    },
    children: props.children,
  };

  return cartridge;
};
