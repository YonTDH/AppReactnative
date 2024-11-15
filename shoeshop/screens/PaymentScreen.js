import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';

const CheckoutScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TOTAL</Text>
      <Text style={styles.totalAmount}>$4995</Text>

      {/* Card Options */}
      <TouchableOpacity
        style={[styles.cardOption, selectedCard === 'Visa' && styles.selectedCard]}
        onPress={() => handleCardSelect('Visa')}
      >
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968299.png' }} // Thay bằng URL hình ảnh logo Visa
          style={styles.cardLogo}
        />
        <Text style={styles.cardText}>card number</Text>
        <View style={selectedCard === 'Visa' ? styles.radioSelected : styles.radio} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cardOption, selectedCard === 'MasterCard' && styles.selectedCard]}
        onPress={() => handleCardSelect('MasterCard')}
      >
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/16174/16174534.png' }} // Thay bằng URL hình ảnh logo MasterCard
          style={styles.cardLogo}
        />
        <Text style={styles.cardText}>card number</Text>
        <View style={selectedCard === 'MasterCard' ? styles.radioSelected : styles.radio} />
      </TouchableOpacity>

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>PAY NOW</Text>
      </TouchableOpacity>

      {/* Add New Card Option */}
      <Text style={styles.addCardText}>Add new card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  totalAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  cardOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  selectedCard: {
    borderColor: '#007AFF',
  },
  cardLogo: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  payButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addCardText: {
    color: '#007AFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default CheckoutScreen;
