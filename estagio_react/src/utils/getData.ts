import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./api";

export default async function getData<T>(
  path: string,
  config?: AxiosRequestConfig<any>
) {
  const { data } = await api.get<any, AxiosResponse<T>>(path, config);
  return data;
}
