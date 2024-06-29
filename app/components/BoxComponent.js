import React from "react";
import { View, Text } from "react-native";
function BoxComponent({ name, value, width }) {
  return (
    <View
      style={{
        backgroundColor: "#E6B9A6",
        margin: 10,
        borderRadius: 10,
        width: width,
      }}
    >
      <Text style={{ color: "#6F4E37", padding: 5 }}>
        {name}: {value}
      </Text>
    </View>
  );
}

export default BoxComponent;
