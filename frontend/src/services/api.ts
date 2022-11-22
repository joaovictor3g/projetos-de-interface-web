import { getToken } from "@/utils/localStorage";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

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
