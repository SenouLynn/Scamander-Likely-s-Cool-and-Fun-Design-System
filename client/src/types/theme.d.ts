type ThemeContextProps = InitData & {
  mode: "test" | "edit" | "live" | "development" | "production";
  children?: React.ReactNode;
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
