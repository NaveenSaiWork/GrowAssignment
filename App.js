import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StockDetailsNavigator from "./app/navigation/StockDetailsNavigator";
function App() {
  return (
    <NavigationContainer>
      <StockDetailsNavigator />
    </NavigationContainer>
  );
}

export default App;
