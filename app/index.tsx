import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ui/ThemedView';
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
    boxShadow: '0px 4px 8px rgba(108, 99, 255, 0.1)',
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
    boxShadow: '0px 2px 4px rgba(108, 99, 255, 0.1)',
    elevation: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 16,
    margin: 10,
    boxShadow: '0px 4px 12px rgba(108, 99, 255, 0.15)',
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
    boxShadow: '0px 4px 8px rgba(108, 99, 255, 0.1)',
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
  analyticsTitle: {  // Add this new style
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'System',
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
    boxShadow: '0px 4px 12px rgba(108, 99, 255, 0.1)',
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
  calendarSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    fontFamily: 'System',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  medicationInfo: {
    flex: 1,
    marginLeft: 16,
  },
  medicationDosage: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  medicationTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  medicationSchedule: {
    fontSize: 12,
    color: '#4A41FF',
    fontWeight: '500',
  },
  takeButton: {
    backgroundColor: '#6C63FF15',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  takeButtonText: {
    color: '#6C63FF',
    fontSize: 12,
    fontWeight: '600',
  },
  medicationIconText: {
    fontSize: 20,
  },
});

export default function Index() {
  // Add this state
  const [activeTab, setActiveTab] = useState('vitals');
  
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
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
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

      {/* Replace your existing card with this new section */}
      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'vitals' && styles.activeTab]}
            onPress={() => setActiveTab('vitals')}
          >
            <Text style={[styles.tabText, activeTab === 'vitals' && styles.activeTabText]}>
              Vitals
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'blood-pressure' && styles.activeTab]}
            onPress={() => setActiveTab('blood-pressure')}
          >
            <Text style={[styles.tabText, activeTab === 'blood-pressure' && styles.activeTabText]}>
              Blood Pressure
            </Text>
          </TouchableOpacity>
        </View>

        <ThemedView variant="card" style={styles.card}>
          {activeTab === 'vitals' ? (
            <>
              <ThemedText variant="subtitle">Heart Rate</ThemedText>
              <Text style={styles.measurementValue}>
                75 <Text style={styles.measurementUnit}>bpm</Text>
              </Text>
              <ThemedText variant="caption">Last updated: Today 9:00 AM</ThemedText>
            </>
          ) : (
            <>
              <ThemedText variant="subtitle">Blood Pressure</ThemedText>
              <Text style={styles.measurementValue}>
                120/80 <Text style={styles.measurementUnit}>mmHg</Text>
              </Text>
              <ThemedText variant="caption">Last updated: Today 9:00 AM</ThemedText>
            </>
          )}
        </ThemedView>

        <View style={styles.chart}>
          <LineChart
            data={{
              labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              datasets:
                activeTab === 'vitals'
                  ? [
                      {
                        data: [72, 75, 73, 76, 74, 75, 73],
                        color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
                        strokeWidth: 2,
                      },
                    ]
                  : [
                      {
                        data: [120, 118, 122, 119, 121, 120, 118],
                        color: (opacity = 1) => `rgba(235, 87, 87, ${opacity})`,
                        strokeWidth: 2,
                      },
                      {
                        data: [80, 82, 78, 81, 79, 80, 81],
                        color: (opacity = 1) => `rgba(47, 128, 237, ${opacity})`,
                        strokeWidth: 2,
                      },
                    ],
            }}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#fff',
              },
              propsForLabels: {
                fontSize: 12,
              },
              formatYLabel: (value) => `${value}${activeTab === 'vitals' ? 'bpm' : ''}`,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            withDots={true}
            withShadow={false}
            withInnerLines={true}
            withOuterLines={true}
            withVerticalLines={false}
            withHorizontalLines={true}
          />
        </View>

        <View style={styles.analyticsSection}>
          <ThemedText variant="subtitle" style={styles.analyticsTitle}>
            {activeTab === 'vitals' ? 'Heart Rate Analytics' : 'Blood Pressure Analytics'}
          </ThemedText>
          <ThemedText variant="body" style={styles.analyticsText}>
            {activeTab === 'vitals'
              ? 'Heart rate is within normal range'
              : 'Blood pressure is within normal range'}
          </ThemedText>
        </View>
      </View>

      {/* Updated Medication Section */}
            <View style={styles.calendar}>
              <View style={styles.calendarHeader}>
                <View>
                  <Text style={styles.calendarTitle}>Medications</Text>
                  <Text style={styles.calendarSubtitle}>Your daily schedule</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
      
              <View style={styles.medicationItem}>
                <View style={[styles.medicationIcon, { backgroundColor: '#6C63FF' }]}>
                  <Text style={styles.medicationIconText}>💊</Text>
                </View>
                <View style={styles.medicationInfo}>
                  <Text style={styles.medicationText}>Oliderkim 2000</Text>
                  <Text style={styles.medicationDosage}>1 tablet of 2000 mg</Text>
                  <View style={styles.medicationTimeContainer}>
                    <Text style={styles.medicationSchedule}>Next dose in 3 days</Text>
                    <TouchableOpacity style={styles.takeButton}>
                      <Text style={styles.takeButtonText}>Take Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
      
              <View style={styles.medicationItem}>
                <View style={[styles.medicationIcon, { backgroundColor: '#4A41FF' }]}>
                  <Text style={styles.medicationIconText}>💊</Text>
                </View>
                <View style={styles.medicationInfo}>
                  <Text style={styles.medicationText}>Vitamin C</Text>
                  <Text style={styles.medicationDosage}>1 tablet of 500 mg</Text>
                  <View style={styles.medicationTimeContainer}>
                    <Text style={styles.medicationSchedule}>Next dose in 3 days</Text>
                    <TouchableOpacity style={styles.takeButton}>
                      <Text style={styles.takeButtonText}>Take Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
    </Animated.ScrollView>
  );
}