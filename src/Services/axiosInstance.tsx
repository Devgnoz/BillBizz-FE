import axios from "axios";

const BASE_URLS: Record<number, string> = {
  5000: "http://localhost:5000/",
  5001: "http://localhost:5001/",
  5002: "http://localhost:5002/",
  5003: "http://localhost:5003/",
  5004: "http://localhost:5004/",
  5005: "http://localhost:5005/",
  5006: "http://localhost:5006/",
  5007: "http://localhost:5007/",
  5008: "http://localhost:5008/",
  5009: "http://localhost:5009/",
};

const createInstance = (
  port: number,
  contentType: string,
  useAuth: boolean
) => {
  const baseURL = BASE_URLS[port];
  let headers: Record<string, string> = {
    "Content-Type": contentType,
    Accept: "application/json",
  };

  if (useAuth) {
    const authToken: string | null = localStorage.getItem("token");
    if (authToken) {
      headers = { ...headers, Authorization: `Token ${authToken}` };
    }
  }

  return axios.create({
    baseURL,
    headers,
  });
};

const baseInstance = (port: number) =>
  createInstance(port, "application/json", false);

const authInstance = (port: number) =>
  createInstance(port, "application/json", true);

const MauthInstance = (port: number) =>
  createInstance(port, "multipart/form-data", true);

export default { baseInstance, authInstance, MauthInstance };
