import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
  productCard: {
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
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 12,
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default function ShopScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Product Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prenatal Vitamins</Text>
        <View style={styles.productCard}>
          <Image source={require('../assets/images/icon.png')} style={styles.productImage} />
          <Text style={styles.productTitle}>Premium Prenatal Vitamins</Text>
          <Text style={styles.productDescription}>Comprehensive formula with essential nutrients for mother and baby.</Text>
          <Text style={styles.price}>$29.99</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Iron Supplements</Text>
        <View style={styles.productCard}>
          <Image source={require('../assets/images/icon.png')} style={styles.productImage} />
          <Text style={styles.productTitle}>Gentle Iron Formula</Text>
          <Text style={styles.productDescription}>Easy-to-absorb iron supplement to support healthy blood levels.</Text>
          <Text style={styles.price}>$19.99</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}