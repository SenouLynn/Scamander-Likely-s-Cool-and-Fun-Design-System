type ThemeWrapperProps = Partial<InitData> & {
  children?: any;
  mode?: "test";
};

type InitData = {
  controlOptions: ControlOptions;
  defaultStyles: ComponentPackageSet;
  componentList: ComponentPackageSet;
  pagesList: ComponentPackageSet;
  routes: DbRoutes;
  setData: any;
  asteroidBelt: {
    [key: string]: ComponentPackage;
  };
};

type ComponentPackageSet = {
  [key: string]: Partial<ComponentPackage>;
};

type UpdateStyleProps = {
  type: "default" | "custom";
  id: string;
  styles: StylePackage;
  initData: any;
};
type UpdateSubComponentProps = {
  type: "default" | "custom";
  id: string;
  subComponents: ComponentPackage[];
  initData: any;
};


type ControlOptions = Partial<{
  wrapper: DataDisplayKeys;
  item: DataDisplayKeys;
  generic: {
    padding: DataDisplayKeys;
  };
  options: {
    [key: string]: DataDisplayKeys;
  };
}>;

type DataDisplayKeys = {
  label: string;
  options?:
    | {
        [key: string]: DataDisplayValues;
      }
    | string;
  value: string | number;
};
type DataDisplayValues = {
  label: string;
  value: string | number;
};

type SelectOptionsDisplay = {
  styleId: string;
  optionsId: string;
  onClick: (x: any) => void;
};

type OptionsObject = {
  optionsId: string;
  styleId: string;
  label: string;
  index: number;
  render: ({
    optionsObj,
    componentPackage,
  }: {
    optionsObj: OptionsObject;
    componentPackage: ComponentPackage;
  }) => void;
  checkValid: (componentPackage: ComponentPackage) => boolean;
  onChange: any;
};

type ComponentWrapperProps = {
  props: ComponentProps;
  pack: ComponentPackage;
};

type CreateChildProps = {
  id: string;
  label: string;
  options: CreateChildProps[];
};

type TestStyleObj = {
  style: string;
  styleOption: GenericSizes | BooleanOptions;
  renderedStyleName: string;
};

//Elements

type ElementsObj = {
  label: string;
  Element: (props?: any) => any;
  id: string;
};

type Elements = [
  "page",
  "header",
  "footer",
  "body",
  "section",
  "main",
  "text",
  "wrapper",
  "button"
];

// type Elements = "header" | "footer" | "body" | "section" | "main" | "text";

type HtmlElements = {
  [key in Elements[number]]: ElementsObj;
};

type ComponentPackage = {
  role: string; //Elements;
  type?: "page" | "section" | "component";
  label: string;
  defaultStyleId: string;
  componentId: string;
  styles: StylePackage & {
    className?: string;
  };
  subComponents: AtLeast<ComponentPackage, "componentId">[];
  childIds: string[];
  children: string[];
  location: string;
  // onClick?: (props: any) => void;
  // render: (props: ComponentWrapperProps) => any;
};

type ComponentProps = {} & StylePackage & Partial<ComponentPackage>;

type StylePackage = Partial<ComponentStyleProps> &
  Partial<WrapperContainerProps> &
  Partial<ItemContainerProps> & {
    className?: string;
  };

type DbRoute = {
  id: string;
  label: string;
  route: string;
  subComponents: Partial<ComponentIds[]> | null;
  componentIds: Partial<ComponentIds>;
};

type DbRoutes = {
  [key: string]: DbRoute;
};

type ReactRoute = {
  path: string;
  element: any;
};

type ThemeContextProps = InitData & {
  mode: "test" | "edit" | "live" | "development" | "production";
  children?: any;
  componentPackage: (props: ComponentIds) => any;
  pages: (props: ComponentIds) => any;
  updateComponentStyle: (props: Omit<UpdateStyleProps, "initData">) => any;
  updateSubComponents: (
    props: Omit<UpdateSubComponentProps, "initData">
  ) => any;
  openComponents: { [key: string]: ComponentPackage };
  setOpenComponents: (value: any) => any;
  setComponentList: (component: ComponentPackage) => any;
  setData: any;
};

type StyleOptions = {
  [key: string]: any; //Type these variants
  className?: any;
};
interface ComponentManifest {
  [key: string]: GetComponentPackage; //Type these variants
}

type GetComponentPackage = AtLeast<ComponentPackage, "componentId">;

type ComponentIds = {
  defaultStyleId: string;
  componentId: string;
  subComponents?: ComponentIds[];
};
type BuildComponentIds = {
  componentIds: ComponentIds;
  props: ComponentProps;
  getComponentPackage: any;
};

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type searchable<O = any> = {
  [key: string]: O;
};

interface Common {
  children?: any;
  style?: any;
}

type FlexSizes = 1 | 2 | 3 | 4 | 5 | 6;
type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridDirection = "col" | "row";
type BooleanOptions = "true" | "false" | true | false;
type GenericSizes = "xsm" | "sm" | "md" | "lg" | "xl" | "xxl" | "base" | "none";
type FlexPlacements = "between" | "start" | "end" | "center" | "around";
type Roles = "page" | "section" | "component";
type DisplayOptions = "flex" | "grid";

type AllVariants = FlexSizes &
  GridSizes &
  GridDirection &
  GenericSizes &
  FlexPlacements &
  Roles &
  DisplayOptions;

type FlexContainer<T> = T extends { display: "flex" }
  ? FlexContainerProps
  : null;

type FlexContainerProps = {
  display?: "flex";
  justify?: FlexPlacements;
  align?: FlexPlacements;
};
type FlexItemProps = {
  display?: "flex";
  size?: FlexSizes;
};
type GridContainerProps = {
  display?: "grid";
  columns?: GridSizes;
  rows?: GridSizes;
};
type GridItemProps = {
  display?: "grid";
  width?: GridSizes;
  height?: GridSizes;
};
type WrapperContainerProps = {
  gap?: FlexSizes;
} & (FlexContainerProps | GridContainerProps);

type ItemContainerProps = {} & (FlexItemProps | GridItemProps);

interface ComponentStyleProps {
  border?: boolean;
  padding?: GenericSizes;
  margin?: GenericSizes;
  backgroundColor?: string;
  // fontSize?: GenericSizes;
}
