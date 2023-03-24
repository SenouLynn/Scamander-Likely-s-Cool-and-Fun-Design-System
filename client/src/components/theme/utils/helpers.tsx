import { Render } from "../../Render";
import Components from "../../_localComponents.manifest";
import ComponentWrapper from "../ComponentWrapper";

export const renderChildren = (props: ComponentProps) => {
  return props.subComponents && props.subComponents.length > 0 ? (
    <>
      {props.subComponents.map((x: ComponentProps, index) => {
        const location = props.location
          ? props.location.concat("." + index)
          : "non-location";
        const Component = () => Render(props, { ...x, location });
        return <Component />;
      })}
    </>
  ) : (
    <>{props.children}</>
  );
};

export const createComponentPackage = ({
  props,
  pack,
}: {
  props?: ComponentProps;
  pack: Partial<ComponentPackage>;
}): ComponentPackage => {
  let component = {
    location: props?.location || "test",
    label: "",
    Component: Components.Container,
    componentId: props?.componentId || "test",
    defaultStyleId: props?.defaultStyleId || "",
    childIds: [],
    styles: {
      ...pack?.styles,
      ...props?.styles,
      className: [props?.styles?.className, pack?.styles?.className].join(" "),
    },
    subComponents: props?.subComponents || [],
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
    childIds: [],
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

export const getPagePackage = ({
  allStyles,
  defaultStyleId,
  componentId,
}: {
  allStyles: InitData;
  defaultStyleId: string;
  componentId?: string;
}): ComponentPackage => {
  const page =
    componentId && allStyles.pagesList[componentId]
      ? allStyles.pagesList[componentId]
      : {};

  console.log(page);
  return {
    location: "",
    label: "",
    Component: Components.Container,
    role: "wrapper",
    defaultStyleId: defaultStyleId,
    componentId: componentId || "",
    subComponents: [],
    childIds: [],
    styles: {
      className: "",
    },
    render: (props: ComponentWrapperProps) => (
      <ComponentWrapper {...props}>
        {renderChildren(props.props)}
      </ComponentWrapper>
    ),
    ...page,
  };
};

export const assembleStyles = ({
  props,
  componentPackage,
}: {
  props?: StylePackage;
  componentPackage?: Partial<ComponentPackage>;
}): ComponentPackage => {
  return createComponentPackage({
    props,
    pack: {
      defaultStyleId: componentPackage?.defaultStyleId,
      componentId: componentPackage?.componentId,
      label: componentPackage?.label,
      subComponents: componentPackage?.subComponents,
      styles: {
        ...componentPackage?.styles,
        ...props,
        className: [componentPackage?.styles?.className, props?.className].join(
          " "
        ),
      },
    },
  });
};
