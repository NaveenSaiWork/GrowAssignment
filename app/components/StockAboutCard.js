import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import BoxComponent from "./BoxComponent";
import LineChart from "./LineChart";
import StockTimeSeries from "../api/StockTimeSeries";
import AsyncStorage from "@react-native-async-storage/async-storage";
function StockAboutCard({ stockDetails, price, ticker }) {
  const {
    Name,
    Description,
    Industry,
    Sector,
    "52WeekLow": weekLow,
    "52WeekHigh": weekHigh,
  } = stockDetails;

  // console.log("ticker", ticker);
  const [stockTimeSeries, setStockTimeSeries] = useState([]);
  const getRequiredDetails = (item) => {
    // console.log("item", item);
    if (!item["Monthly Time Series"]) {
      return [];
    }

    const apiData = item["Monthly Time Series"];
    const data = Object.keys(apiData).map((date, index) => {
      return {
        x: index,
        y: parseFloat(apiData[date]["4. close"]),
        date: date.slice(0, 7), // Get the year-month part of the date for labels
      };
    });
    console.log("data", data);
    return data;
  };
  const fetchData = async (ticker) => {
    const CACHE_KEY = `${ticker}_TimeSeries`;
    try {
      if (AsyncStorage.getItem(CACHE_KEY)) {
        console.log("fetching from cache");
        const cachedData = await AsyncStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const data = getRequiredDetails(JSON.parse(cachedData));

          setStockTimeSeries(data);
          return;
        }
      }
      const response = await StockTimeSeries.getStockTimeSeries(ticker);
      if (response.ok) {
        if (response.data) {
          await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
          const data = getRequiredDetails(response.data);

          setStockTimeSeries(data);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    fetchData(ticker);
  }, [ticker]);
  const HorizontalLine = () => {
    return (
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 1,
          marginVertical: 5,
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      {Name && <Text style={styles.name}>{Name}</Text>}

      {stockTimeSeries.length > 0 && <LineChart chartData={stockTimeSeries} />}

      <HorizontalLine />
      {Description && <Text style={styles.description}>{Description}</Text>}
      <View style={{ flexDirection: "row" }}>
        <BoxComponent name="Industry" value={Industry} width="40%" />
        <BoxComponent name="Sector" value={Sector} width="40%" />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: "grey" }}>52-Week Low</Text>
          <Text style={{ fontWeight: "bold" }}>$ {weekLow}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text> Price :${price}</Text>
          <FontAwesome name="caret-down" size={18} />
        </View>
        <View
          style={{
            width: 110,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            position: "absolute",
            left: 90,
            top: 30,
          }}
        ></View>
        <View>
          <Text style={{ color: "grey" }}>52-Week High</Text>
          <Text style={{ fontWeight: "bold" }}>$ {weekHigh}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    // padding: 10,
  },
  description: {
    padding: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
});
export default StockAboutCard;
