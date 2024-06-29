import { create } from "apisauce";
import { baseURL } from "./apiConfig";
import apiKey from "./apiKey";
const apiClient = create({
  baseURL: baseURL,
});

apiClient.addRequestTransform((request) => {
  if (!request.url.includes("apiKey")) {
    request.url = `${request.url}${
      request.url.includes("?") ? "&" : "?"
    }apiKey=${apiKey}`;
  }
});

apiClient.addResponseTransform((response) => {
  if (!response.ok) {
    console.error(`API Error: ${response.problem}`, response);
  }
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  return response;
};

const post = apiClient.post;

apiClient.post = async (url, data, axiosConfig) => {
  const response = await apiClient.post(url, data, axiosConfig);

  return response;
};

export default apiClient;
