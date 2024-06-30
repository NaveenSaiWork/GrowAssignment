import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

const LineChartComponent = ({ chartData }) => {
  console.log("chartData", chartData);
  return (
    <View style={styles.container}>
      <Chart
        style={{ height: 200, width: 300 }}
        data={chartData}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 0, max: chartData.length - 1 }}
        yDomain={{ min: 0, max: Math.max(...chartData.map((d) => d.y)) }}
      >
        <VerticalAxis
          tickCount={6}
          theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
        />
        <HorizontalAxis
          tickCount={Math.min(5, chartData.length)}
          // chartData[v].date
          theme={{
            labels: {
              formatter: (v) => {
                if (chartData[v]) {
                  return chartData[v].date;
                }
              },
            },
          }}
        />
        <Area
          theme={{
            gradient: {
              from: { color: "#ffa502" },
              to: { color: "#ffa502", opacity: 0.4 },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: "#ffa502", width: 5 },
            scatter: { default: { width: 4, height: 4, rx: 2 } },
          }}
        />
      </Chart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 20,
  },
});

export default LineChartComponent;
