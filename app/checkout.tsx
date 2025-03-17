import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ui/ThemedView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    padding: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#6C63FF',
    fontWeight: '600',
  },
  paymentMethodCard: {
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
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  paymentMethodDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  paymentMethodIcon: {
    width: 40,
    height: 40,
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
    marginBottom: 16,
  },
  payButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default function CheckoutScreen() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (selectedPaymentMethod === 'card' && (!cardNumber || !expiryDate || !cvv)) {
      alert('Please fill in all card details.');
      return;
    }

    if ((selectedPaymentMethod === 'orangeMoney' || selectedPaymentMethod === 'afriMoney') && !phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    // Simulate payment processing
    console.log('Processing payment with:', selectedPaymentMethod);
    alert('Payment successful!');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: false,
        }} 
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Checkout</Text>
          <View style={{ width: 48 }} />
        </View>

      {/* Payment Methods */}
      <TouchableOpacity
        style={styles.paymentMethodCard}
        onPress={() => setSelectedPaymentMethod('orangeMoney' as any)}
      >
        <Image
          source={require('../assets/orange-money.png')} // Replace with your Orange Money icon
          style={styles.paymentMethodIcon}
        />
        <Text style={styles.paymentMethodTitle}>Orange Money</Text>
        <Text style={styles.paymentMethodDescription}>
          Pay securely with your Orange Money account.
        </Text>
        {selectedPaymentMethod === 'orangeMoney' && (
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.paymentMethodCard}
        onPress={() => setSelectedPaymentMethod('afriMoney' as any)}
      >
        <Image
          source={require('../assets/afrimoney.png')} // Replace with your AfriMoney icon
          style={styles.paymentMethodIcon}
        />
        <Text style={styles.paymentMethodTitle}>AfriMoney</Text>
        <Text style={styles.paymentMethodDescription}>
          Pay securely with your AfriMoney account.
        </Text>
        {selectedPaymentMethod === 'afriMoney' && (
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.paymentMethodCard}
        onPress={() => setSelectedPaymentMethod('card' as any)}
      >
        <Image
          source={require('../assets/credit-card.png')} // Replace with your card icon
          style={styles.paymentMethodIcon}
        />
        <Text style={styles.paymentMethodTitle}>Credit/Debit Card</Text>
        <Text style={styles.paymentMethodDescription}>
          Pay securely with your credit or debit card.
        </Text>
        {selectedPaymentMethod === 'card' && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="MM/YY"
                keyboardType="numeric"
                value={expiryDate}
                onChangeText={setExpiryDate}
              />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="CVV"
                keyboardType="numeric"
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
          </>
        )}
      </TouchableOpacity>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  );
}