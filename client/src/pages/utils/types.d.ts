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
    field: (component: ComponentPackage) => any;
    fieldList: (fieldList: ComponentPackageSet) => any;
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
