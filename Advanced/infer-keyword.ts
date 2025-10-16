type GetDataType<T> = T extends { payload: infer U } ? U : never;

type ApiResponseSuccess = {
  status: "success";
  payload: { data: string[] };
};

type ApiResponseError = {
  status: "error";
  message: string;
};

type SuccessPayload = GetDataType<ApiResponseSuccess>;
type ErrorPayload = GetDataType<ApiResponseError>;

const successData: SuccessPayload = { data: ["item1", "item2"] };