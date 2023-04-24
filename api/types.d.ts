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
  field: {};
  routes: {};
};
