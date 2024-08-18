import axios, { AxiosInstance } from "axios"

export const createAPIInstance = (baseURL: string, apiKey: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
  })
}
