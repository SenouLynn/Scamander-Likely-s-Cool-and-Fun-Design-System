type PageRoute = {
  id: string;
  label?: string;
  route: string;
  subComponents?: Partial<GetComponentIds[]> | null;
  componentIds: Partial<GetComponentIds>;
};

type PageRoutes = {
  [key: string]: PageRoute;
};

type ReactRoute = {
  path: string;
  element: any;
  Component?: React.FC;
  loader?: () => Promise<any>;
};

type ComponentPayloadShape = {
  key: string;
  value: ComponentPackage;
};

type ComponentPayloadShapeSet = {
  [key: string]: ComponentPayloadShape;
};

//New
type DbResponse<T = any> = {
  status: "success" | "error";
  id: string;
  payload: {
    message: string;
    payload: T;
  };
};
