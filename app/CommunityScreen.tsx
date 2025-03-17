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
  button: {
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

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Discussion Forum Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Discussion Forum</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Join discussions with other moms-to-be</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Recent Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start New Discussion</Text>
        </TouchableOpacity>
      </View>

      {/* Expert Q&A Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expert Q&A</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Get answers from certified professionals</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ask a Question</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Browse Questions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}