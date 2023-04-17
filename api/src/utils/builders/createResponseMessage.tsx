export const throwError = ({
  res,
  code,
  message,
  payload,
}: {
  res: any;
  code: number;
  message: string;
  payload?: any;
}) => {
  res.status(code).send(message);
};

const codes: searchable = {
  200: "success",
  400: "error",
};
export const createResponse = ({
  status = "success",
  payload,
}: {
  status?: "success" | "error";
  payload: any;
}): ResponseMessage => {
  const code = Object.keys(codes).find((key) => codes[key] === status);
  return {
    status: "success",
    code,
    payload,
  };
};
