import React from 'react';
import { View, Text, Image, TextInput, Button, FlatList } from 'react-native';
import styles from '../styles/styles';

const CheckoutScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={Array.from({ length: 5 })}
      renderItem={({ item, index }) => (
        <View style={styles.cartItem} key={index}>
          <Image source={{ uri: 'IMAGE_URL' }} style={styles.cartImage} />
          <Text>Item name</Text>
          <Text>$999</Text>
          <View style={styles.quantityControl}>
            <Button title="-" onPress={() => {}} />
            <Text>1</Text>
            <Button title="+" onPress={() => {}} />
          </View>
          <Button title="X" onPress={() => {}} />
        </View>
      )}
    />

    <TextInput placeholder="Voucher" style={styles.voucherInput} />
    <Button title="Apply" onPress={() => {}} />
    <Text style={styles.totalText}>TOTAL: $4995</Text>
    <Button title="NEXT" onPress={() => {}} />
  </View>
);

export default CheckoutScreen;
