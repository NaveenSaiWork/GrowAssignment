import { create } from "apisauce";
import { baseURL } from "./apiConfig";
import apiKey from "./apiKey";
const apiClient = create({
  baseURL: baseURL,
});
const getStockDetails = (symbol) =>
  apiClient.get("", {
    function: "OVERVIEW",
    symbol: `${symbol}`,
    apikey: apiKey,
  });

export default { getStockDetails };
