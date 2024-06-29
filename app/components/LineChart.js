import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
// { chartData }
const LineChartComponent = () => {
  // console.log("chartData", chartData);
  const chartData = [
    {
      x: 0,
      y: 0.023,
      date: "2024-06",
    },
    {
      x: 1,
      y: 0.0688,
      date: "2024-05",
    },
    {
      x: 2,
      y: 0.0401,
      date: "2024-04",
    },
    {
      x: 3,
      y: 0.0625,
      date: "2024-03",
    },
    {
      x: 4,
      y: 0.0462,
      date: "2024-02",
    },
    {
      x: 5,
      y: 0.0301,
      date: "2024-01",
    },
  ];
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
          // theme={{ labels: { formatter: (v) => chartData[v].date } }}
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
  },
});

export default LineChartComponent;
