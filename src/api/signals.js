import API from "./axios";

export const fetchSignals = async () => {
  const res = await API.get("/signals");
  return res.data;
};
