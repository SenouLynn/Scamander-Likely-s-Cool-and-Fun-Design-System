type ResponseMessage = {
  status: "success" | "error";
  code: number | string;
  payload: any;
};
