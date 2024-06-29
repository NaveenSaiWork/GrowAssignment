import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import defaultStyles from "../config/styles";

function StockCard({
  ticker,
  price,
  change_amount,
  change_percentage,
  volume,
}) {
  const navigation = useNavigation();
  const handleStockPress = () => {
    navigation.navigate("Details Screen", {
      ticker,
      price,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleStockPress}>
      <Text>Ticker : {ticker}</Text>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome name="dollar" size={20} color="black" />
        <Text> {price}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome
          name={change_amount > 0 ? "caret-up" : "caret-down"}
          size={24}
          color={change_amount > 0 ? "green" : "red"}
        />
        <Text style={{ color: change_amount > 0 ? "green" : "red" }}>
          {" "}
          {change_amount}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome
          name={change_amount > 0 ? "caret-up" : "caret-down"}
          size={24}
          color={change_amount > 0 ? "green" : "red"}
        />
        <Text style={{ color: change_amount > 0 ? "green" : "red" }}>
          {change_percentage}
        </Text>
      </View>
      <Text>Volume : {volume}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 20,
    flex: 1,
    width: "60%",
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: defaultStyles.colors.secondary,
  },
});
export default StockCard;
