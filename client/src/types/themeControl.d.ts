type ThemeContextProps = {
  // [key in keyof StylePackage]: any;
  mode: "test" | "edit" | "live";
  componentList: ComponentManifest;
  children?: React.ReactNode;
  controlOptions: StyleOptions;
  getStyleOptions: (componentPackage: ComponentPackage) => void;
  getComponentDefaultStyle: (props: ComponentPackage) => void;
  openComponents: string;
  setOpenComponents: (value: string) => any;
};

type StyleOptions = {
  [key: string]: any; //Type these variants
};
interface ComponentManifest {
  [key: string]: AtLeast<ComponentPackage, "component">; //Type these variants
}
