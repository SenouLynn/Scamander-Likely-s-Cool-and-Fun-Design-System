type searchable = {
  [key: string]: any;
};
interface Common {
  children?: JSX.Element | React.ReactNode;
  style?: CSSSProperties;
}

type searchable = {
  [key: string]: any;
};

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

type ComponentPackage = {
  role: string; //Elements;
  type?: "page" | "section" | "component";
  label: string;
  defaultStyleId: string;
  componentId: string;
  Component: (props: ComponentProps) => JSX.Element;
  styles: StylePackage & {
    className?: string;
    imgUrl?: string;
  };
  subComponents: AtLeast<ComponentPackage, "componentId">[];
  childIds: string[];
  onClick?: (props: any) => void;
  children: string[];
  location: string;
  render: (props: ComponentWrapperProps) => JSX.Element | React.ReactNode;
};

type ComponentPackageSet = {
  [key: string]: ComponentPackage;
};
type ComponentProps = {} & StylePackage & Partial<ComponentPackage>;

type StylePackage = Partial<ComponentStyleProps> &
  Partial<WrapperContainerProps> &
  Partial<ItemContainerProps> & {
    className?: string;
  };
