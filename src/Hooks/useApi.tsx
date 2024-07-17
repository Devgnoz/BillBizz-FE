import { useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "../Services/axiosInstance";

interface ApiResponse {
  response: AxiosResponse | null;
  error: any;
}

const useApi = (type: string, port: number) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const authToken = localStorage.getItem("token");

  const request = async (
    url: string,
    payload?: any,
    header?: AxiosRequestConfig
  ): Promise<ApiResponse> => {
    setLoading(true);
    let response: AxiosResponse | undefined;
    const api = authToken
      ? axiosInstance.authInstance(port)
      : axiosInstance.baseInstance(port);
    const mApi = axiosInstance.MauthInstance(port);

    try {
      switch (type) {
        case "post":
          response = await api.post(url, payload, header);
          break;
        case "patch":
          response = await api.patch(url, payload, header);
          break;
        case "mPost":
          response = await mApi.post(url, payload, header);
          break;
        case "mPut":
          response = await mApi.put(url, payload, header);
          break;
        case "put":
          response = await api.put(url, payload, header);
          break;
        case "delete":
          response = await api.delete(url);
          break;
        case "hget":
          response = await api.get(url, header);
          break;
        default:
          response = await api.get(url);
          break;
      }

      if (response) {
        setError(!response.status.toString().startsWith("2"));
        setData(response.data);
        return { response, error: null } as ApiResponse;
      } else {
        throw new Error("Response is undefined");
      }
    } catch (err) {
      setError(true);
      setData(null);
      return { response: null, error: err } as ApiResponse;
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};

export default useApi;
