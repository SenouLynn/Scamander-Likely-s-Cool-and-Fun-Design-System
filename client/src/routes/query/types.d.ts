
//New
type DbResponse<T = any> = {
  status: "success" | "error";
  id: string;
  payload: {
    message: string;
    payload: T;
  };
};
type DbPayload<T = any> = {
  project: string;
  themeId: String;
  payload: T;
};
