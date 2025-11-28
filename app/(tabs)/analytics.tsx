import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Svg, { Circle, Path, Text as SvgText } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const categoryData = [
  { name: "Food", amount: 1150, percentage: 40, color: "#FF6B6B" },
  { name: "Transport", amount: 680, percentage: 24, color: "#4E7FFF" },
  { name: "Bills", amount: 520, percentage: 18, color: "#10B981" },
  { name: "Shopping", amount: 350, percentage: 12, color: "#FFA500" },
  { name: "Others", amount: 147, percentage: 6, color: "#9CA3AF" },
];

const AnalyticsPage = () => {
  const size = 200;
  const radius = 85;
  const totalSpent = categoryData.reduce((sum, item) => sum + item.amount, 0);

  const chartData = useMemo(() => {
    return categoryData.map((item) => ({
      ...item,
      value: item.percentage,
    }));
  }, []);

  const createPieChartPaths = () => {
    let startAngle = -Math.PI / 2; // start at top
    const paths = [];

    chartData.forEach((item, index) => {
      const angle = (item.value / 100) * Math.PI * 2;
      const endAngle = startAngle + angle;

      const largeArc = item.value > 50 ? 1 : 0;

      const x1 = size / 2 + radius * Math.cos(startAngle);
      const y1 = size / 2 + radius * Math.sin(startAngle);

      const x2 = size / 2 + radius * Math.cos(endAngle);
      const y2 = size / 2 + radius * Math.sin(endAngle);

      const path = `
        M ${size / 2} ${size / 2}
        L ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
        Z
      `;

      paths.push(
        <Path
          key={index}
          d={path}
          fill={item.color}
          stroke="#fff"
          strokeWidth={2}
        />
      );

      startAngle = endAngle;
    });

    return paths;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Spending by Category</Text>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>January 2025</Text>
          <Ionicons name="chevron-down" size={14} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Chart + Legend */}
      <View style={styles.card}>
        <View style={styles.chartRow}>
          {/* Donut Chart */}
          <Svg width={size} height={size}>
            {createPieChartPaths()}

            {/* Inner white circle */}
            <Circle cx={size / 2} cy={size / 2} r={55} fill="white" />

            {/* Center amount */}
            <SvgText
              x={size / 2}
              y={size / 2 - 5}
              textAnchor="middle"
              fontSize="20"
              fontWeight="bold"
              fill="#111827"
            >
              ${totalSpent.toLocaleString()}
            </SvgText>

            <SvgText
              x={size / 2}
              y={size / 2 + 20}
              textAnchor="middle"
              fontSize="12"
              fill="#6B7280"
            >
              Total Spent
            </SvgText>
          </Svg>

          {/* Legend */}
          <View style={styles.legendContainer}>
            {categoryData.map((item, index) => (
              <View key={index} style={styles.legendItem}>
                <View
                  style={[styles.legendDot, { backgroundColor: item.color }]}
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.legendLabel}>{item.name}</Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.legendAmount}>
                    ${item.amount.toLocaleString()}
                  </Text>
                  <Text style={styles.legendPercent}>{item.percentage}%</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#F5F7FA",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#4B5563",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  filterText: {
    fontSize: 12,
    marginRight: 5,
    color: "#000",
  },

  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  chartRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  legendContainer: {
    marginLeft: 16,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },

  legendLabel: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "500",
  },

  legendAmount: {
    color: "#111827",
    fontSize: 13,
    fontWeight: "600",
  },

  legendPercent: {
    color: "#6B7280",
    fontSize: 11,
  },
});

export default AnalyticsPage;
