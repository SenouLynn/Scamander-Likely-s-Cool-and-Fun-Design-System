type UpdateThemePayload = {
  projectId: string;
  themeId: string;
  payload: {
    [key: string]: any; //Type this yos
  };
};
type DeleteComponentProps = {
  projectId: string;
  themeId: string;
  location: string;
};

type EndPointConfig = {
  endpoint: string;
  method: "post" | "get";
  payload: any | null;
};

type ComponentPayloadShape = {
  key: string;
  value: ComponentPackage;
};

type ComponentPayloadShapeSet = {
  [key: string]: ComponentPayloadShape;
};
