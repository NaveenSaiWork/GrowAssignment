import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiClient from "../api/getgainersAndLosersApi";
import Screen from "../components/Screen";
import StockCard from "../components/StockCard";
import Header from "../components/Header";
import colors from "../config/colors";

const CACHE_KEY = "@topGainersData";

function TopGainers() {
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
        console.log(response);

        if (response.data?.top_gainers) {
          // Update state with fetched data
          setData(response.data.top_gainers);
          // Cache the response for future use
          await AsyncStorage.setItem(
            CACHE_KEY,
            JSON.stringify(response.data.top_gainers)
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
export default TopGainers;
