import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";
import TopGainers from "../screens/TopGainers";
import TopLosers from "../screens/TopLosers";

const Tab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { color: colors.medium },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.medium,
        headerShown: false,
        headerTitleStyle: {
          color: colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Top Gainers"
        component={TopGainers}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="Trophy" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Top Losers"
        component={TopLosers}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="emoji-sad" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
