export declare const throwError: ({
  res,
  code,
  message,
  payload,
}: {
  res: any;
  code: number;
  message: string;
  payload?: any;
}) => void;
export declare const createResponse: ({
  status,
  payload,
}: {
  status?: "success" | "error";
  payload: any;
}) => {
  status: string;
  code: string;
  payload: any;
};
