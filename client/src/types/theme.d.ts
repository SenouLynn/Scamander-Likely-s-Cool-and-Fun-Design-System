type ThemeContextProps = InitData & {
  mode: "test" | "edit" | "live" | "development" | "production";
  children?: React.ReactNode;
  componentPackage: (props: ComponentIds) => any;
  pages: (props: ComponentIds) => any;
  updateComponentStyle: (props: Omit<UpdateStyleProps, "initData">) => any;
  updateSubComponents: (
    props: Omit<UpdateSubComponentProps, "initData">
  ) => any;
  setComponentList: (component: ComponentPackage) => any;
  setData: any;
};

// type StyleOptions = {
//   [key: string]: any; //Type these variants
//   className?: any;
// };
interface ComponentManifest {
  [key: string]: GetComponentPackage; //Type these variants
}

type GetComponentPackage = AtLeast<ComponentPackage, "componentId">;

type ComponentIds = {
  location: string;
  componentId: string;
  subComponents?: ComponentIds[];
};
type BuildComponentIds = {
  componentIds: ComponentIds;
  props: ComponentProps;
  getComponentPackage: any;
};

type ThemeProps = {
  id: string;
  label: string;
  themeField: ComponentPackageSet;
  routes: { [key: string]: DbRoute };
  children?: React.ReactNode;
  currentRoute?: string;
  get: {
    pack: (ids: GetComponentIds) => ComponentPackage | null;
  };
  set: {
    field: (pack: ComponentPackage) => any;
    fieldList: (fieldList: ComponentPackageSet) => any;
    deletePack: (pack: ComponentPackage) => any;
  };
};

interface GetComponentIds {
  location: string;
  componentId?: string;
}

interface RouteState<T = any> {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: T;
}

type ComponentWrapperProps = {
  props: ComponentProps;
  pack: ComponentPackage;
};

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
  "button",
  "image",
  "mainHeader",
  "subHeader",
  "largeHeader",
  "mediumHeader",
  "smallHeader",
  "tinyHeader",
  "image"
];


// type Elements = "header" | "footer" | "body" | "section" | "main" | "text";

type HtmlElements = {
  [key in Elements[number]]: ElementsObj;
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
type ThemeWrapperProps = Partial<InitData> & {
  children?: any;
  mode?: "test";
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

type TestStyleObj = {
  style: string;
  styleOption: GenericSizes | BooleanOptions;
  renderedStyleName: string;
};