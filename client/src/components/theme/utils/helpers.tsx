import { Render } from "../../Render";
import Components from "../declarations/_localComponents.manifest";
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
  initData,
  defaultStyleId,
  componentId,
}: {
  initData: InitData;
  defaultStyleId: string;
  componentId?: string;
}): ComponentPackage => {
  const defaultPackage = initData.defaultStyles[defaultStyleId]
    ? initData.defaultStyles[defaultStyleId]
    : {};

  const customPackage =
    componentId && initData.componentList[componentId]
      ? initData.componentList[componentId]
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
  initData,
  defaultStyleId,
  componentId,
}: {
  initData: InitData;
  defaultStyleId: string;
  componentId?: string;
}): ComponentPackage => {
  const page =
    componentId && initData.pagesList[componentId]
      ? initData.pagesList[componentId]
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
        className: [componentPackage?.styles?.className, props?.className]
          .join(" ")
          .trim(),
      },
    },
  });
};

export const buildComponentPackage = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>,
  initData: InitData
) => {
  const c = getComponentPackage({
    initData,
    defaultStyleId: pack.defaultStyleId || "container",
    componentId: pack.componentId || "container",
  });
  //2.Build styles for
  const page = assembleStyles({ props, componentPackage: c });
  //If package is passed through props, override default package from teheme
  const packOverride = { ...c, ...pack };

  //Add built styles to built package
  return { ...packOverride, styles: page.styles };
};

export const createInitData = (data?: Partial<InitData>) => {
  return {
    componentList: {},
    defaultStyles: {},
    controlOptions: {},
    pagesList: {},
    routes: {},
    setData: () => null,
    asteroidBelt: {},
    ...data,
  };
};
export const createAsteroidBelt = (props: {
  initData: InitData;
  page: ComponentPackage;
}) => {
  const pagePackage = buildFieldFromPage({}, props.page, props.initData);

  const firstChildren = (pack: ComponentPackage) =>
    pack.subComponents.map((c, i) => {
      const childPackage = buildComponentPackage({}, c, props.initData);

      return { ...childPackage, location: `${pack.location}.${i}` };
    });

  //Extremely Load Bearing => This loads the entire flat structure of page components
  const unrollChildren = (pack: ComponentPackage) => {
    const children = firstChildren(pack);
    let childs = {};
    if (children.length > 0) {
      childs = children.reduce((acc, c: ComponentPackage) => {
        let p: searchable = acc;
        p = { ...p, [c.location]: c };
        if (c.subComponents) {
          p = { ...p, ...unrollChildren(c) };
        }
        return p;
      }, {});
    }

    return childs;
  };
  const p: searchable = {
    [pagePackage.location]: pagePackage,
    ...unrollChildren(pagePackage),
  };

  return p;
};

export const buildFieldFromPage = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>,
  initData: InitData
) => {
  const p = getPagePackage({
    initData,
    componentId: pack.componentId || "container",
    defaultStyleId: pack.defaultStyleId || "container",
  });

  const page = assembleStyles({ props, componentPackage: p });
  const subComponents = () => {
    let payload: any[] = [];
    if (p.subComponents) {
      payload = [...payload, ...p.subComponents];
    }
    if (pack.subComponents) {
      payload = [...payload, ...pack.subComponents];
    }
    if (props.subComponents) {
      payload = [...payload, ...props.subComponents];
    }

    return payload;
  };

  const packOverride = { ...p, ...pack };
  return {
    ...packOverride,
    styles: page.styles,
    subComponents: subComponents(),
  };
};
