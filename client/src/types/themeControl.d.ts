type ThemeContextProps = {
  // [key in keyof StylePackage]: any;
  mode: "test" | "edit" | "live";
  componentList: ComponentManifest;
  children?: React.ReactNode;
  controlOptions: StyleOptions;
  getStyleOptions: (componentPackage: ComponentPackage) => void;
  componentPackage: (props: GetComponentPackage) => any;
  openComponents: string;
  setOpenComponents: (value: string) => any;
};

type StyleOptions = {
  [key: string]: any; //Type these variants
};
interface ComponentManifest {
  [key: string]: AtLeast<ComponentPackage, "component">; //Type these variants
}

interface GetComponentPackage {
  defaultId: string;
  componentId?: string;
}
