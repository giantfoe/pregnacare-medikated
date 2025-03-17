import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import ThemedText from '../components/ui/ThemedText';
import IconSymbol from '../components/ui/IconSymbol';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    paddingTop: 50,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#6C63FF',
  },
  greeting: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'System',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'System',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 16,
    margin: 10,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 25,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
  },
  activeTab: {
    backgroundColor: '#6C63FF',
    transform: [{ scale: 1.05 }],
  },
  tabText: {
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'System',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  measurementValue: {
    fontSize: 42,
    fontWeight: '700',
    color: '#000000',
    marginVertical: 12,
    fontFamily: 'System',
    letterSpacing: -1,
  },
  measurementUnit: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'System',
    letterSpacing: 0.5,
  },
  chart: {
    marginVertical: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
    fontFamily: 'System',
  },
  analyticsSection: {
    marginTop: 16,
  },
  analyticsText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
  },
  calendar: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    margin: 16,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  calendarTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    fontFamily: 'System',
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'rgba(108, 99, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  medicationIcon: {
    width: 32,
    height: 32,
    marginRight: 16,
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medicationText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'System',
  },
  medicationTime: {
    fontSize: 16,
    color: '#4A41FF',
    fontWeight: '500',
    fontFamily: 'System',
  },
});

export default function Index() {
  const [activeTab, setActiveTab] = useState('Vitals');
  const [refreshing, setRefreshing] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const [trackingData, setTrackingData] = useState({
    Vitals: [20, 45, 28, 80, 99, 43, 50],
    BloodPressure: [30, 55, 38, 70, 89, 53, 60],
    weight: [],
    mood: [],
    symptoms: [],
    notes: [],
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const getCurrentDataset = () => {
    return activeTab.toLowerCase() === 'vitals'
      ? trackingData.Vitals
      : trackingData.BloodPressure;
  };

  return (
    <Animated.ScrollView
      style={[styles.container, { opacity: fadeAnim }]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={['#6C63FF']}
          progressBackgroundColor="#F0F4FF"
        />
      }
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        colors={['#6C63FF', '#8A84FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.userInfo}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://via.placeholder.com/48' }}
          />
          <View>
            <Text style={[styles.greeting, { color: '#000000' }]}>Welcome back</Text>
            <Text style={[styles.userName, { color: '#000000' }]}>Mariama Kamara</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: 'rgb(0, 0, 0)' }]}
            onPress={() => {}}
          >
            <IconSymbol name="🔔" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: 'rgb(0, 0, 0)' }]}
            onPress={() => {}}
          >
            <IconSymbol name="♡" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <LinearGradient colors={['#fff', '#F8F9FF']} style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Vitals' && styles.activeTab]}
            onPress={() => setActiveTab('Vitals')}
          >
            <Text style={[styles.tabText, activeTab === 'Vitals' && styles.activeTabText]}>
              Vitals
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'BloodPressure' && styles.activeTab]}
            onPress={() => setActiveTab('BloodPressure')}
          >
            <Text style={styles.tabText}>BloodPressure</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.measurementValue}>2,361</Text>
        <Text style={styles.measurementUnit}>ng/ml</Text>

        <View style={styles.chart}>
          <ThemedText variant="subtitle" style={styles.chartTitle}>
            {activeTab === 'Vitals' ? 'Vitals Levels' : 'BloodPressure Levels'}
          </ThemedText>
          <LineChart
            data={{
              labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              datasets: [
                {
                  data: getCurrentDataset(),
                },
              ],
            }}
            width={width - 64}
            height={200}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              strokeWidth: 2,
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#fff',
              },
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <View style={styles.analyticsSection}>
            <ThemedText variant="body" style={styles.analyticsText}>
              {activeTab === 'Vitals'
                ? 'Vitals levels are within normal range'
                : 'BloodPressure levels are within normal range'}
            </ThemedText>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.calendar}>
        <View style={styles.calendarHeader}>
          <Text style={styles.calendarTitle}>March 2024</Text>
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.medicationItem}>
          <Text style={styles.medicationIcon}>💊</Text>
          <View>
            <Text style={styles.medicationText}>Oliderkim 2000</Text>
            <Text style={styles.medicationTime}>1 tablet of 2000 mg</Text>
          </View>
          <Text>3 days</Text>
        </View>

        <View style={styles.medicationItem}>
          <Text style={styles.medicationIcon}>💊</Text>
          <View>
            <Text style={styles.medicationText}>Vitamin C</Text>
            <Text style={styles.medicationTime}>1 tablet of 500 mg</Text>
          </View>
          <Text>3 days</Text>
        </View>
      </View>
    </Animated.ScrollView>
  );
}