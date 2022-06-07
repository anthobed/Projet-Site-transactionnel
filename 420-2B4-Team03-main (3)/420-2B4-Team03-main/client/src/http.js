import store from "./store";
import axios from "axios";

axios.interceptors.request.use((request) => {
  const token = store.state.auth.token;
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default axios;
