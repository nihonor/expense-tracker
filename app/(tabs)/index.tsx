import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Food': '#FF6B6B',
    'Transport': '#4E7FFF',
    'Bills': '#10B981',
    'Shopping': '#FFA500',
  };
  return colors[category] || '#9CA3AF';
};

const HomePage = () => {
  const recentExpenses = [
    { id: '1', title: 'Grocery', category: 'Food', amount: 85.20, time: '10:30 AM', icon: '🍔' },
    { id: '2', title: 'Taxi', category: 'Transport', amount: 24.50, time: '09:15 AM', icon: '🚕' },
    { id: '3', title: 'Electric Bill', category: 'Bills', amount: 120.75, time: 'Yesterday', icon: '💡' },
    { id: '4', title: 'Shopping', category: 'Shopping', amount: 65.90, time: 'Yesterday', icon: '🛍️' },
  ]
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

      {/* Recent Transactions */}
      <View style={styles.transactionsContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {recentExpenses.map((expense) => (
          <View key={expense.id} style={styles.transactionCard}>
            <View style={[styles.transactionIcon, { backgroundColor: getCategoryColor(expense.category) }]}>
              <Text style={styles.emojiIcon}>{expense.icon}</Text>
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>{expense.title}</Text>
              <Text style={styles.transactionCategory}>{expense.category} • {expense.time}</Text>
            </View>
            <Text style={styles.transactionAmount}>-${expense.amount.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.analyticsCard}>
        <View style={styles.analyticsPercentage}>
          <Text style={styles.analyticsHeader}>81.3%</Text>
          <Text style={styles.analyticsEmoji}>Used</Text>
          <Text style={styles.analyticsPercent}>9 days left</Text>
        </View>
        <View style={styles.analyticsPercentage}>
           <Text style={styles.analyticsHeader}>81.3%</Text>
          <Text style={styles.analyticsEmoji}>Used</Text>
          <Text style={styles.analyticsPercent}>9 days left</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingBottom: 100,
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
    fontWeight: '400',
    color: '#000000',
  },
  name: {
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  addButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#0e0eebff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0707b6',
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
  transactionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    padding: 20,
    paddingTop: 30,
    marginTop: 10,
    margin: 20,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  seeAllText: {
    color: '#4E7FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  transactionIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#EFF4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  emojiIcon: {
    fontSize: 20,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 3,
  },
  transactionCategory: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  addTransactionButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4E7FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4E7FFF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
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
  analyticsCard: {
    flexDirection: 'row',
    justifyContent:'center',
    gap:60,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  analyticsPercentage: {
    backgroundColor:"white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    borderRadius:10,  
    padding:20,
    paddingHorizontal:40,
    alignItems:'center',
    justifyContent:'center'
  }
    
  
  
})

export default HomePage