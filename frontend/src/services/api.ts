import { getToken } from "@/utils/localStorage";
import axios from "axios";

const baseURL = "https://sistema-matricula-api.up.railway.app";

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      return {
        ...config,
        headers: {
          ...(config.headers ?? {}),
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
