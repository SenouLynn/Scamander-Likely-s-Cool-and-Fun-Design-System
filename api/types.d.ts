type UpdatePackagePayload = {
  pack: any;
  field: { [key: string]: any };
  parent?: any;
};

type DbHeirarchy = {
  //App/Project
  freshPressed: Project;
};

type Project = {
  appId: string;
  label: string;
  theme: string;
  themes: { [key: string]: ThemePackage };
};

type ThemePackage = {
  id: string;
  label: string;
  pages: {}; //Component Packages with routes
  field: {}; //All build components flattened
  components: {}; //Callable components with subcomponents
  routes: {}; //Available pages
  defaultStyles: {}; //Idk?
};
