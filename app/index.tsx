import React, { useState, useEffect } from 'react';
import HelloWave from '../components/HelloWave';
import ParallaxScrollView from '../components/ParallaxScrollView';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ui/ThemedView';
import IconSymbol from '../components/ui/IconSymbol';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
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
    padding: 20,
    margin: 16,
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
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#4A4A4A',
    fontFamily: 'System',
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
  const [activeTab, setActiveTab] = useState('Progesterone');
  const fadeAnim = useState(new Animated.Value(0))[0];

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.ScrollView 
      style={[styles.container, { opacity: fadeAnim }]}
      showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#6C63FF', '#8A84FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://via.placeholder.com/48' }}
          />
          <View>
            <Text style={[styles.greeting, { color: '#000000' }]}>Welcome back</Text>
            <Text style={[styles.userName, { color: '#000000' }]}>Allessandra Wins</Text>
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

      <LinearGradient
        colors={['#fff', '#F8F9FF']}
        style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Progesterone' && styles.activeTab]}
            onPress={() => setActiveTab('Progesterone')}>
            <Text style={[styles.tabText, styles.activeTabText]}>Progesterone</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Cortisol' && styles.activeTab]}
            onPress={() => setActiveTab('Cortisol')}>
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
