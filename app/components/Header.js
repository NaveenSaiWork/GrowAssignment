import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";
function Header(props) {
  return (
    <View style={[styles.header]}>
      <Text style={[defaultStyles.heading]}>Stocks App</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    marginTop: 5,
    justifyContent: "center",
  },
});
export default Header;
