import { create } from "apisauce";
import apiKey from "./apiKey";
import { baseURL } from "./apiConfig";
const apiClient = create({
  baseURL: baseURL,
});

const getStockTimeSeries = (symbol) =>
  apiClient.get("", {
    function: "TIME_SERIES_MONTHLY",
    symbol: `${symbol}`,
    apikey: apiKey,
  });

export default { getStockTimeSeries };
