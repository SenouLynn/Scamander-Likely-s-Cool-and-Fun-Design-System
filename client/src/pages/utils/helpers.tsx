import { faker } from "@faker-js/faker";
import { Render } from "_components/Render";
import ComponentWrapper from "_components/theme_2.0/ComponentWrapper";
import { assembleStyles } from "_components/theme_2.0/utils/hooks/helpers";
import { uniqueId } from "pages/poopdeck_2.0/utils/create";

export const renderChildren = (props: ComponentProps) => {
  return props.subComponents && props.subComponents.length > 0 ? (
    <>
      {props.subComponents.map((x: ComponentProps, index) => {
        const location = x.location
          ? x.location
          : faker.random.alphaNumeric(10);
        const Component = () => Render(props, { ...x, location });
        return <Component key={x.componentId} />;
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
  pack?: Partial<ComponentPackage>;
}): ComponentPackage => {
  return {
    role: "wrapper",
    location: props?.location || uniqueId(),
    label: "",
    componentId: props?.componentId || pack?.location || "0",
    styles: {
      ...pack?.styles,
      ...props?.styles,
      className: [props?.styles?.className, pack?.styles?.className].join(" "),
    },
    subComponents: props?.subComponents || [],
    children: [],
    render: (props: ComponentWrapperProps) => {
      return (
        <ComponentWrapper {...props}>
          {renderChildren(props.props)}
        </ComponentWrapper>
      );
    },
    ...pack,
  };
};

export const getComponentPackage = ({
  initData,
  location,
  componentId,
}: {
  initData: InitData;
  location: string;
  componentId?: string;
}): ComponentPackage => {
  const customPackage =
    componentId && initData.componentList[componentId]
      ? initData.componentList[componentId]
      : {};
  const payload = createComponentPackage({
    pack: {
      ...customPackage,
    },
  });
  return payload;
};

export const getPagePackage = ({
  initData,
  location,
  componentId,
}: {
  initData: InitData;
  location: string;
  componentId?: string;
}): ComponentPackage => {
  const page =
    componentId && initData.pagesList[componentId]
      ? initData.pagesList[componentId]
      : {};

  const payload = createComponentPackage({
    pack: {
      location: location,
      componentId: componentId || "",

      ...page,
    },
  });
  return payload;
};

export const buildComponentPackage = (
  props: ComponentProps,
  pack: Partial<ComponentPackage>,
  initData: InitData
) => {
  const c = getComponentPackage({
    location: pack.location || "container",
    componentId: pack.componentId || "container",
    initData,
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
    location: pack.location || "container",
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
