import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useCart } from '../logic/CartContext';

const CartScreen = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  const [voucher, setVoucher] = React.useState('');
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.price * item.quantity;
    });
    if (voucher === 'DISCOUNT10') {
      sum = sum * 0.9; // Apply 10% discount
    }
    setTotal(sum);
  }, [cartItems, voucher]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cartListContainer}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => `${item.id}-${item.color}-${item.size}`} // Bao gồm size để tránh trùng lặp
          horizontal={false}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.itemDetails}>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
                <Text style={styles.itemQuantity}>Color: {item.color}</Text> {/* Hiển thị màu */}
                <Text style={styles.itemQuantity}>Size: {item.size}</Text> {/* Hiển thị size */}
                <Button
                  title="-"
                  onPress={() => {
                    if (item.quantity > 1) {
                      removeFromCart(item.id, item.color, item.size); // Xóa theo ID, màu và size
                    } else {
                      removeFromCart(item.id, item.color, item.size, true); // Xóa sản phẩm khi quantity = 1
                    }
                  }}
                />
              </View>
            </View>
          )}
        />


      </ScrollView>

      <View style={styles.voucherContainer}>
        <TextInput
          style={styles.voucherInput}
          placeholder="Enter Voucher Code"
          value={voucher}
          onChangeText={setVoucher}
        />
        <Button title="Apply Voucher" onPress={() => {}} />
      </View>

      <Text style={styles.total}>Total: ${total}</Text>
      <Button title="Proceed to Payment" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  cartListContainer: {
    paddingBottom: 20, // Add padding at the bottom for smooth scroll
  },
  cartItem: {
    flexDirection: 'column', // Stack the content vertically
    padding: 15,
    marginBottom: 15, // Add space between items
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Add space below the name
  },
  itemDetails: {
    flexDirection: 'row', // Keep price, quantity, and button in a row
    alignItems: 'center',
    justifyContent: 'space-between', // Spread out the elements
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
    marginRight: 10,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#777',
    marginRight: 10,
  },
  voucherContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  voucherInput: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default CartScreen;
