import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import apiClient from "../api/getgainersAndLosersApi";
import colors from "../config/colors";
import Screen from "../components/Screen";
import StockCard from "../components/StockCard";
import Header from "../components/Header";

const CACHE_KEY = "@topLosersData";

function TopLosers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Check if cached data exists
      const cachedData = await AsyncStorage.getItem(CACHE_KEY);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        console.log("fetched from cache");
        return;
      }

      const response = await apiClient.getGainersAndLosers();
      if (response.ok) {
        if (response.data?.top_losers) {
          // Update state with fetched data
          setData(response.data.top_losers);
          // Cache the response for future use
          await AsyncStorage.setItem(
            CACHE_KEY,
            JSON.stringify(response.data.top_losers)
          );
        }
      } else {
        setError(response.problem);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Header />
        {data.length === 0 && <Text>Loading...</Text>}
        {data.length > 0 && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.ticker}
            renderItem={({ item }) => <StockCard {...item} />}
            numColumns={2}
          />
        )}
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    backgroundColor: colors.white,
  },
});

export default TopLosers;
