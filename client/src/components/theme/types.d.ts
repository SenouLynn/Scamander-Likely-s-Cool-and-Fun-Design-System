type ThemeWrapperProps = Partial<InitData> & {
  children?: React.ReactNode;
  mode?: "test";
};

type InitData = {
  controlOptions: ControlOptions;
  defaultStyles: DbStyleObject;
  componentList: DbStyleObject;
  pagesList: DbStyleObject;
  routes: DbRoutes;
};

type DbStyleObject = {
  [key: string]: Partial<ComponentPackage>;
};

type UpdateStyleProps = {
  type: "default" | "custom";
  id: string;
  styles: StylePackage;
  allStyles: any;
};
type UpdateSubComponentProps = {
  type: "default" | "custom";
  id: string;
  subComponents: ComponentPackage[];
  allStyles: any;
};

type DefaultStyleObj = {
  [key: string]: {
    defaultStyleId: string;
    label: string;
    styles: StyleOptions;
  };
};

type ComponentStyleObj = {
  [key: string]: {
    defaultStyleId: string;
    componentId: string;
    label: string;
    styles: StyleOptions;
  };
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

type ControlOptionsDisplay = ControlOptions & {
  errors: ErrorMessageObj[];
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
  styleOption: GenericSizes;
  renderedStyleName: string;
};

//Elements

type ElementsObj = {
  label: string;
  Element: (props?: any) => JSX.Element;
};

type Elements = [
  "header",
  "footer",
  "body",
  "section",
  "main",
  "text",
  "wrapper"
];
// type Elements = "header" | "footer" | "body" | "section" | "main" | "text";
type HtmlElements = {
  [key in Elements[number]]: ElementsObj;
};
