import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    marginRight: 12,
  },
  timelineContent: {
    flex: 1,
  },
  logButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default function TrackerScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Pregnancy Timeline Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pregnancy Timeline</Text>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={styles.cardText}>Week 12: First trimester screening</Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={styles.cardText}>Week 20: Anatomy scan</Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={styles.cardText}>Week 28: Glucose screening test</Text>
          </View>
        </View>
      </View>

      {/* Daily Log Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Log</Text>
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.buttonText}>Log Symptoms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.buttonText}>Log Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.buttonText}>Log Mood</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}