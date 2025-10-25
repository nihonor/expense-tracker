import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const HomePage = () => {
  const categoryData = [
    { name: 'Food', amount: 1150, percentage: 40, color: '#FF6B6B' },
    { name: 'Transport', amount: 680, percentage: 24, color: '#4E7FFF' },
    { name: 'Bills', amount: 520, percentage: 18, color: '#10B981' },
    { name: 'Shopping', amount: 350, percentage: 12, color: '#FFA500' },
    { name: 'Others', amount: 147, percentage: 6, color: '#9CA3AF' },
  ]

  const totalSpent = 2847
  const budget = 3500
  const remaining = 653
  const percentageUsed = 81.3
  const daysLeft = 9

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, <Text style={styles.name}>Sarah!</Text> 👋</Text>
          <Text style={styles.subtitle}>Track your expenses wisely</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Total Spent Card */}
      <LinearGradient
      colors={["#0707b6", "#995299ff"]} // start → end colors
         start={{ x: 0, y: 0 }}           // Top Left
      end={{ x: 1, y: 1 }}
        locations={[0.5, 1]}
      style={styles.card}
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Spent This Month</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amount}>${totalSpent.toLocaleString()}</Text>
          <View style={styles.dollarIcon}>
            <Text style={styles.dollarText}>$</Text>
          </View>
        </View>
        <View style={styles.budgetRow}>
          <Text style={styles.budgetText}>Budget: ${budget.toLocaleString()}</Text>
          <Text style={styles.remainingText}>Remaining: ${remaining}</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${percentageUsed}%` }]} />
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>{percentageUsed}% used</Text>
          <Text style={styles.statsText}>{daysLeft} days left</Text>
        </View>
      </View>
      </LinearGradient>
      {/* Spending by Category */}
      <View style={styles.categoryCard}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Spending by Category</Text>
          <Text style={styles.monthText}>January 2025</Text>
        </View>

        <View style={styles.categoryContent}>
          {/* Donut Chart Placeholder */}
          <View style={styles.chartContainer}>
            <View style={styles.donutChart}>
              {categoryData.map((category, index) => (
                <View
                  key={index}
                  style={[
                    styles.donutSegment,
                    { backgroundColor: category.color }
                  ]}
                />
              ))}
            </View>
          </View>

          {/* Category List */}
          <View style={styles.categoryList}>
            {categoryData.map((category, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={styles.categoryLeft}>
                  <View style={[styles.categoryDot, { backgroundColor: category.color }]} />
                  <Text style={styles.categoryName}>{category.name}</Text>
                </View>
                <View style={styles.categoryRight}>
                  <Text style={styles.categoryAmount}>${category.amount}</Text>
                  <Text style={styles.categoryPercentage}>{category.percentage}%</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
  },
  name: {
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#5B7FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5B7FFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  card: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 5,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 8,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '700',
  },
  dollarIcon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '100',
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  budgetText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  remainingText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#995299ff',
    borderRadius: 4,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#000000',
   
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsText: {
    color: '#FFFFFF',
    fontSize: 13,
    opacity: 0.9,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  monthText: {
    fontSize: 14,
    color: '#6B7280',
  },
  categoryContent: {
    flexDirection: 'row',
    gap: 20,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutChart: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 20,
    borderColor: '#F9FAFB',
  },
  donutSegment: {
    width: '20%',
    height: '100%',
  },
  categoryList: {
    flex: 1,
    gap: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  categoryName: {
    fontSize: 14,
    color: '#4B5563',
  },
  categoryRight: {
    alignItems: 'flex-end',
  },
  categoryAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  categoryPercentage: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
})

export default HomePage