import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";

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
  quickAccessButton: {
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

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Daily Tips Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Tips</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Stay hydrated and drink plenty of water throughout the day.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Get enough rest and sleep for at least 7-8 hours daily.</Text>
        </View>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Your next prenatal appointment is in 3 days.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Remember to take your prenatal vitamins today.</Text>
        </View>
      </View>

      {/* Quick Access Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <TouchableOpacity style={styles.quickAccessButton}>
          <Text style={styles.buttonText}>Pregnancy Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton}>
          <Text style={styles.buttonText}>Community Forum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton}>
          <Text style={styles.buttonText}>Shop Products</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
