import { getToken } from "@/utils/localStorage";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      return {
        ...config,
        headers: {
          token,
        },
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);
