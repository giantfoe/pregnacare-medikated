import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    color: '#666',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
  },
  measurementValue: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
    marginVertical: 8,
  },
  measurementUnit: {
    color: '#666',
    fontSize: 14,
  },
  chart: {
    marginVertical: 16,
  },
  calendar: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  calendarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  medicationIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  medicationText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  medicationTime: {
    fontSize: 14,
    color: '#666',
  },
});

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://via.placeholder.com/40' }}
          />
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>Allessandra Wins 👋</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.iconButton}>
            <Text>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text>⭐️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Progesterone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Cortisol</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.measurementValue}>2,361</Text>
        <Text style={styles.measurementUnit}>ng/ml</Text>

        <View style={styles.chart}>
          <LineChart
            data={{
              labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              datasets: [{
                data: [20, 45, 28, 80, 99, 43, 50]
              }]
            }}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </View>

      <View style={styles.calendar}>
        <View style={styles.calendarHeader}>
          <Text style={styles.calendarTitle}>March 2024</Text>
          <TouchableOpacity>
            <Text>📅</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.medicationItem}>
          <Text style={styles.medicationIcon}>💊</Text>
          <View>
            <Text style={styles.medicationText}>Oliderkim 2000</Text>
            <Text style={styles.medicationTime}>1 tablet of 2000 mg</Text>
          </View>
          <Text>3 day</Text>
        </View>

        <View style={styles.medicationItem}>
          <Text style={styles.medicationIcon}>💊</Text>
          <View>
            <Text style={styles.medicationText}>Vitamin C</Text>
            <Text style={styles.medicationTime}>1 tablet of 500 mg</Text>
          </View>
          <Text>3 day</Text>
        </View>
      </View>
    </ScrollView>
  );
}
