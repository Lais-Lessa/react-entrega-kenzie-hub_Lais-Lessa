import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@TOKEN");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
