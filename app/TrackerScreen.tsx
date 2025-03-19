import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, TextInput, Modal, Text, RefreshControl } from 'react-native';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ui/ThemedView';
import { LineChart } from 'react-native-chart-kit';

// First, add these new styles to your StyleSheet
// Update these styles
// Add these new styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    padding: 15,
    paddingTop: 50,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxHeight: '80%',
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#6C63FF',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F8F9FF',
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#6C63FF',
  },
  cancelButton: {
    backgroundColor: '#ff6b6b',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#6C63FF',
    fontWeight: '600',
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
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
  tipsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginTop: 20,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  tipsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    letterSpacing: -0.5,
  },
  tipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  tipCard: {
    width: '48%',
    backgroundColor: '#F8F9FF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tipCardHighlight: {
    backgroundColor: '#6C63FF',
  },
  tipCardText: {
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 22,
    fontWeight: '500',
  },
  tipCardTextHighlight: {
    color: '#FFFFFF',
  },
  
  // Timeline related styles
  timelineCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  weekInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  weekNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6C63FF',
  },
  weekLabel: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 8,
  },
  
  // Info card styles
  infoCard: {
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  
  // Add these new styles for fruit size and tips
  fruitSize: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  fruitEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  tipContainer: {
    marginTop: 8,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});

export default function TrackerScreen() {
  const [activeTab, setActiveTab] = useState('vitals');
  const [showAddDataModal, setShowAddDataModal] = useState(false);
  const [formData, setFormData] = useState({
    weight: '',
    heartRate: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    mood: '',
    symptoms: '',
    notes: '',
  });
  const [refreshing, setRefreshing] = useState(false);

  const handleAddData = () => {
    console.log('Saving data:', formData);
    setShowAddDataModal(false);
    setFormData({
      weight: '',
      heartRate: '',
      bloodPressureSystolic: '',
      bloodPressureDiastolic: '',
      mood: '',
      symptoms: '',
      notes: '',
    });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={['#6C63FF']}
          progressBackgroundColor="#F8F9FF"
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pregnancy Tracker</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowAddDataModal(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showAddDataModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
            <ThemedText variant="title" style={styles.modalTitle}>
              Add New Entry
            </ThemedText>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>
                Weight (kg)
              </ThemedText>
              <TextInput
                style={styles.input}
                value={formData.weight}
                onChangeText={(text) => setFormData({ ...formData, weight: text })}
                keyboardType="decimal-pad"
                placeholder="Enter your weight"
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>
                Heart Rate (bpm)
              </ThemedText>
              <TextInput
                style={styles.input}
                value={formData.heartRate}
                onChangeText={(text) => setFormData({ ...formData, heartRate: text })}
                keyboardType="decimal-pad"
                placeholder="Enter your heart rate"
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>
                Blood Pressure (mmHg)
              </ThemedText>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={formData.bloodPressureSystolic}
                  onChangeText={(text) => setFormData({ ...formData, bloodPressureSystolic: text })}
                  keyboardType="decimal-pad"
                  placeholder="Systolic"
                />
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={formData.bloodPressureDiastolic}
                  onChangeText={(text) => setFormData({ ...formData, bloodPressureDiastolic: text })}
                  keyboardType="decimal-pad"
                  placeholder="Diastolic"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>
                Mood
              </ThemedText>
              <TextInput
                style={styles.input}
                value={formData.mood}
                onChangeText={(text) => setFormData({ ...formData, mood: text })}
                placeholder="How are you feeling?"
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>
                Symptoms
              </ThemedText>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.symptoms}
                onChangeText={(text) => setFormData({ ...formData, symptoms: text })}
                placeholder="Any symptoms to note?"
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>
                Additional Notes
              </ThemedText>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.notes}
                onChangeText={(text) => setFormData({ ...formData, notes: text })}
                placeholder="Any other notes?"
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowAddDataModal(false)}
              >
                <ThemedText variant="body" style={styles.buttonText}>
                  Cancel
                </ThemedText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleAddData}
              >
                <ThemedText variant="body" style={styles.buttonText}>
                  Save
                </ThemedText>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

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

        <View style={styles.timelineCard}>
          <View style={styles.weekInfo}>
            <Text style={styles.weekNumber}>12</Text>
            <Text style={styles.weekLabel}>Weeks of your incredible journey</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Current Status</Text>
            <Text style={styles.infoText}>
              Welcome to your second trimester! Your energy levels are rising, and those challenging morning sickness days are fading away. Your pregnancy glow is just beginning.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Development Update</Text>
            <Text style={styles.infoText}>
              Your baby is experiencing a remarkable growth phase, developing new movements and reflexes.
            </Text>
            <View style={styles.fruitSize}>
              <Text style={styles.fruitEmoji}>🍊</Text>
              <Text style={styles.infoText}>Currently the size of a sweet orange (2.5 inches)</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Weekly Guidance</Text>
            <View style={styles.tipContainer}>
              <View style={styles.tipItem}>
                <Text style={styles.tipText}>Maintain hydration with 8-10 glasses of water daily</Text>
              </View>
              <View style={styles.tipItem}>
                <Text style={styles.tipText}>Include gentle prenatal exercises in your routine</Text>
              </View>
              <View style={styles.tipItem}>
                <Text style={styles.tipText}>Create a pregnancy milestone journal</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

{/* Remove the old tips section from infoCard and add this new section after the timelineCard */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Text style={styles.tipsTitle}>Your Weekly Guide</Text>
          </View>
          
          <View style={styles.tipsGrid}>
            <View style={[styles.tipCard, styles.tipCardHighlight]}>
              <Text style={[styles.tipCardText, styles.tipCardTextHighlight]}>
                Stay hydrated with 8-10 glasses of water daily
              </Text>
            </View>
            
            <View style={styles.tipCard}>
              <Text style={styles.tipCardText}>
                Practice gentle prenatal yoga for flexibility
              </Text>
            </View>
            
            <View style={styles.tipCard}>
              <Text style={styles.tipCardText}>
                Take daily prenatal vitamins
              </Text>
            </View>
            
            <View style={styles.tipCard}>
              <Text style={styles.tipCardText}>
                Track your baby's movements
              </Text>
            </View>
            
            <View style={styles.tipCard}>
              <Text style={styles.tipCardText}>
                Get 8 hours of quality sleep
              </Text>
            </View>
            
            <View style={styles.tipCard}>
              <Text style={styles.tipCardText}>
                Schedule your next checkup
              </Text>
            </View>
          </View>
        </View>