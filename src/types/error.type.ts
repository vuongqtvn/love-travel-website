export type RequestStatusOption =
  | "not_started"
  | "pending"
  | "fulfilled"
  | "rejected"
  | "cancelled";

export type RequestState = {
  status: RequestStatusOption;
  error?: any;
};
