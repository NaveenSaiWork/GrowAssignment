// apiClient.js
import { create } from "apisauce";
import { baseURL } from "./apiConfig";
import apiKey from "./apiKey";

const apiClient = create({
  baseURL: baseURL,
});

const getGainersAndLosers = () =>
  apiClient.get("", {
    function: "TOP_GAINERS_LOSERS",
    apikey: apiKey,
  });

export default { getGainersAndLosers };
