import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StockDetails from "../components/StockDetails";
import AppNavigator from "./AppNavigator";
const Stack = createStackNavigator();

const StockDetailsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details Screen"
      component={StockDetails}
      options={{ title: "Stock Details" }}
    />
  </Stack.Navigator>
);

export default StockDetailsNavigator;
// I am naveen
