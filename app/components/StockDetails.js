import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../components/Screen";
import StockAboutCard from "./StockAboutCard";
import StockDetailsApi from "../api/StockDetailsApi";
function StockDetails({ route }) {
  const { ticker, price } = route.params;
  const CACHE_KEY = `${ticker}`;
  const [stockDetails, setStockDetails] = useState(null);
  const [search, setSearch] = useState("");
  const getStockDetails = async (ticker) => {
    try {
      if (AsyncStorage.getItem(CACHE_KEY)) {
        const cachedData = await AsyncStorage.getItem(CACHE_KEY);
        if (cachedData) {
          setStockDetails(JSON.parse(cachedData));
          // console.log("fetched from cache", JSON.parse(cachedData));
          return;
        }
      }
      const response = await StockDetailsApi.getStockDetails(ticker);
      if (response.ok) {
        if (response.data) {
          setStockDetails(response.data);
          // console.log(response.data);
          await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    if (ticker) getStockDetails(ticker);
  }, [ticker]);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={(text) => setSearch(text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderRadius: 10,
          borderWidth: 1,
          marginRight: 10,
          padding: 10,
          width: "35%",
          alignSelf: "flex-end",
        }}
      />
      {stockDetails && (
        <StockAboutCard
          stockDetails={stockDetails}
          price={price}
          ticker={ticker}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
});
export default StockDetails;
