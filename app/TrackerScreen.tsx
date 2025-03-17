import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
  analyticsSection: {
    marginTop: 16,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  analyticsText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
  },
});

export default function TrackerScreen() {
  const [activeTab, setActiveTab] = useState('progesterone');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hormone analysis</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'progesterone' && styles.activeTab]}
            onPress={() => setActiveTab('progesterone')}
          >
            <Text style={[styles.tabText, activeTab === 'progesterone' && styles.activeTabText]}>Progesterone</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'cortisol' && styles.activeTab]}
            onPress={() => setActiveTab('cortisol')}
          >
            <Text style={[styles.tabText, activeTab === 'cortisol' && styles.activeTabText]}>Cortisol</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.measurementValue}>
          {activeTab === 'progesterone' ? '2,361' : '200,23'}
        </Text>
        <Text style={styles.measurementUnit}>ng/ml</Text>

        <View style={styles.chart}>
          <LineChart
            data={{
              labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              datasets: [{
                data: activeTab === 'progesterone' 
                  ? [20, 45, 28, 80, 99, 43, 50]
                  : [15, 35, 25, 45, 40, 30, 20]
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

        <View style={styles.analyticsSection}>
          <Text style={styles.analyticsTitle}>
            {activeTab === 'progesterone' ? 'Progesterone Analytics' : 'Cortisol Analytics'}
          </Text>
          <Text style={styles.analyticsText}>
            {activeTab === 'progesterone' 
              ? 'Progesterone level is normal'
              : 'Cortisol level is normal'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}