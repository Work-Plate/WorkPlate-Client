import axios from "axios";

export const aiInstance = axios.create({
  baseURL: import.meta.env.VITE_AI_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});
