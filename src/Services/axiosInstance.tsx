import axios from "axios";

// const BASE_URL=import.meta.env.VITE_REACT_APP_API_URL
const BASE_URL="http://localhost:5004/"

const baseInstance = () => {
  let headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return axios.create({
    baseURL:BASE_URL,
    headers
  })
};


const authInstance = () => {
  const authToken: string | null = localStorage.getItem("token");
  let headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (authToken) {
    headers = { ...headers, Authorization: `Token ${authToken}` };
  }
  return axios.create({
    baseURL:BASE_URL,
    headers
  })
};

const MauthInstance = () => {
//   const authToken: string | null = localStorage.getItem("token");
  let headers: Record<string, string> = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

//   if (authToken) {
//     headers = { ...headers, Authorization: `Token ${authToken}` };
//   }
  return axios.create({
    baseURL:BASE_URL,
    headers
  })
};

export default { baseInstance, authInstance, MauthInstance };