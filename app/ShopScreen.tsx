import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import ThemedView from '../components/ui/ThemedView';
import ThemedText from '../components/ui/ThemedText';
import IconSymbol from '../components/ui/IconSymbol';
import CartScreen from './CartScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    paddingTop: 50,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 8,
    marginTop: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#374151',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterButtonActive: {
    backgroundColor: '#6C63FF',
  },
  filterText: {
    color: '#374151',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
  },
  content: {
    padding: 16,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 12,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6C63FF',
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default function ShopScreen() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState<Array<{ id: number; title: string; price: number; quantity: number }>>([]);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'conception', label: 'Conception' },
    { id: 'pregnancy', label: 'Pregnancy' },
    { id: 'postnatal', label: 'Postnatal' },
  ];

  const products = [
    {
      id: 1,
      title: 'Pregnacare Original',
      description: 'Essential vitamins and minerals for pregnancy',
      price: 29.99,
      image: require('../assets/images/ferty.jpeg'),
      category: 'pregnancy',
      badge: 'Best Seller',
    },
    {
      id: 2,
      title: 'Pregnacare Conception',
      description: 'Supports conception and early pregnancy',
      price: 24.99,
      image: require('../assets/images/vita1.jpeg'),
      category: 'conception',
    },
    {
      id: 3,
      title: 'Pregnacare Plus',
      description: 'Advanced formula with Omega-3',
      price: 34.99,
      image: require('../assets/images/vita2.jpeg'),
      category: 'pregnancy',
      badge: 'New',
    },
    {
      id: 4,
      title: 'Pregnacare Breast-feeding',
      description: 'Essential nutrients for nursing mothers',
      price: 27.99,
      image: require('../assets/images/vita3.jpeg'),
      category: 'postnatal',
    },
    {
      id: 5,
      title: 'Pregnacare Max',
      description: 'Advanced pregnancy supplement with enhanced folic acid and vitamin D3',
      price: 39.99,
      image: require('../assets/images/vita3.jpeg'),
      category: 'pregnancy',
      badge: 'Premium',
    },
    {
      id: 6,
      title: 'Pregnacare Plus Omega',
      description: 'Complete multivitamin with Omega-3 DHA for pregnancy and breastfeeding',
      price: 44.99,
      image: require('../assets/images/vita4e.jpeg'),
      category: 'pregnancy',
      badge: 'New',
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <ThemedView variant="header" style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <ThemedText variant="title">Shop Vitamins</ThemedText>
          <TouchableOpacity onPress={() => setCartVisible(true)}>
            <IconSymbol name="🛒" size={24} color="#6C63FF" />
            {cartItems.length > 0 && (
              <View style={[styles.badge, { top: -8, right: -8 }]}>
                <Text style={styles.badgeText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <IconSymbol name="🔍" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </ThemedView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {filters.map(filter => (
          <TouchableOpacity
            key={filter.id}
            style={[styles.filterButton, activeFilter === filter.id && styles.filterButtonActive]}
            onPress={() => setActiveFilter(filter.id)}
          >
            <Text style={[styles.filterText, activeFilter === filter.id && styles.filterTextActive]}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.content}>
        <View style={styles.productGrid}>
          {filteredProducts.map(product => (
            <View key={product.id} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              {product.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{product.badge}</Text>
                </View>
              )}
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.price}>Le{product.price.toFixed(2)}</Text>
                <TouchableOpacity 
                  style={styles.buyButton}
                  onPress={() => {
                    const existingItem = cartItems.find(item => item.id === product.id);
                    if (existingItem) {
                      setCartItems(cartItems.map(item =>
                        item.id === product.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                      ));
                    } else {
                      setCartItems([...cartItems, { ...product, quantity: 1 }]);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>

      <CartScreen
        visible={cartVisible}
        onClose={() => setCartVisible(false)}
        items={cartItems}
        onUpdateQuantity={(id, quantity) => {
          if (quantity === 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
          } else {
            setCartItems(cartItems.map(item =>
              item.id === id ? { ...item, quantity } : item
            ));
          }
        }}
        onRemoveItem={(id) => {
          setCartItems(cartItems.filter(item => item.id !== id));
        }}
      />
    </View>
  );
}