import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, TextInput, Modal, Text } from 'react-native';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ui/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from 'react-native-chart-kit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    paddingTop: 80,
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
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    padding: 15,
    paddingTop: 50,
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
  const [activeTab, setActiveTab] = useState('vitals');
  const [showAddDataModal, setShowAddDataModal] = useState(false);
  const [formData, setFormData] = useState({
    weight: '',
    heartRate: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    mood: '',
    symptoms: '',
    notes: ''
  });

  const handleAddData = () => {
    // Here we would typically save the data
    console.log('Saving data:', formData);
    setShowAddDataModal(false);
    setFormData({ weight: '', mood: '', symptoms: '', notes: '' });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, {
        backgroundColor: '#fff',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      }]}>
        <Text style={[styles.headerTitle, { color: '#333', paddingLeft: 16 }]}>Pregnancy Tracker</Text>
        <TouchableOpacity 
          style={[styles.addButton, { marginRight: 16 }]}
          onPress={() => setShowAddDataModal(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showAddDataModal}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
            <ThemedText variant="title" style={styles.modalTitle}>Add New Entry</ThemedText>
            
            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>Weight (kg)</ThemedText>
              <TextInput
                style={styles.input}
                value={formData.weight}
                onChangeText={(text) => setFormData({...formData, weight: text})}
                keyboardType="decimal-pad"
                placeholder="Enter your weight"
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>Heart Rate (bpm)</ThemedText>
              <TextInput
                style={styles.input}
                value={formData.heartRate}
                onChangeText={(text) => setFormData({...formData, heartRate: text})}
                keyboardType="decimal-pad"
                placeholder="Enter your heart rate"
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>Blood Pressure (mmHg)</ThemedText>
              <View style={{flexDirection: 'row', gap: 8}}>
                <TextInput
                  style={[styles.input, {flex: 1}]}
                  value={formData.bloodPressureSystolic}
                  onChangeText={(text) => setFormData({...formData, bloodPressureSystolic: text})}
                  keyboardType="decimal-pad"
                  placeholder="Systolic"
                />
                <TextInput
                  style={[styles.input, {flex: 1}]}
                  value={formData.bloodPressureDiastolic}
                  onChangeText={(text) => setFormData({...formData, bloodPressureDiastolic: text})}
                  keyboardType="decimal-pad"
                  placeholder="Diastolic"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>Mood</ThemedText>
              <TextInput
                style={styles.input}
                value={formData.mood}
                onChangeText={(text) => setFormData({...formData, mood: text})}
                placeholder="How are you feeling?"
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>Symptoms</ThemedText>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.symptoms}
                onChangeText={(text) => setFormData({...formData, symptoms: text})}
                placeholder="Any symptoms to note?"
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.inputContainer}>
              <ThemedText variant="subtitle" style={styles.inputLabel}>Additional Notes</ThemedText>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.notes}
                onChangeText={(text) => setFormData({...formData, notes: text})}
                placeholder="Any other notes?"
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowAddDataModal(false)}>
                <ThemedText variant="body" style={styles.buttonText}>Cancel</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleAddData}>
                <ThemedText variant="body" style={styles.buttonText}>Save</ThemedText>
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
            <Text style={[styles.tabText, activeTab === 'vitals' && styles.activeTabText]}>Vitals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'blood-pressure' && styles.activeTab]}
            onPress={() => setActiveTab('blood-pressure')}
          >
            <Text style={[styles.tabText, activeTab === 'blood-pressure' && styles.activeTabText]}>Blood Pressure</Text>
          </TouchableOpacity>
        </View>

        <ThemedView variant="card" style={styles.card}>
          {activeTab === 'vitals' ? (
            <>
              <ThemedText variant="subtitle">Heart Rate</ThemedText>
              <Text style={styles.measurementValue}>75 <Text style={styles.measurementUnit}>bpm</Text></Text>
              <ThemedText variant="caption">Last updated: Today 9:00 AM</ThemedText>
            </>
          ) : (
            <>
              <ThemedText variant="subtitle">Blood Pressure</ThemedText>
              <Text style={styles.measurementValue}>120/80 <Text style={styles.measurementUnit}>mmHg</Text></Text>
              <ThemedText variant="caption">Last updated: Today 9:00 AM</ThemedText>
            </>
          )}
        </ThemedView>
        <View style={styles.chart}>
          <LineChart
            data={{
              labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
              datasets: activeTab === 'vitals' ? [
                {
                  data: [72, 75, 73, 76, 74, 75, 73],
                  color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
                  strokeWidth: 2
                }
              ] : [
                {
                  data: [120, 118, 122, 119, 121, 120, 118],
                  color: (opacity = 1) => `rgba(235, 87, 87, ${opacity})`,
                  strokeWidth: 2
                },
                {
                  data: [80, 82, 78, 81, 79, 80, 81],
                  color: (opacity = 1) => `rgba(47, 128, 237, ${opacity})`,
                  strokeWidth: 2
                }
              ]
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
                borderRadius: 16
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#fff'
              },
              propsForLabels: {
                fontSize: 12
              },
              formatYLabel: (value) => `${value}${activeTab === 'vitals' ? 'bpm' : ''}`
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
            legend={activeTab === 'blood-pressure' ? ['Systolic', 'Diastolic'] : undefined}
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
    </ScrollView>
  );
}