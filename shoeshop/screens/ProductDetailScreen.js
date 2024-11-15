
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add to cart logic
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>{"< Back"}</Text>
      </TouchableOpacity>
      <Image source={{ uri: 'shoe_image_url' }} style={styles.productImage} />
      <Text style={styles.price}>$299</Text>
      <Text style={styles.productName}>Item Name</Text>

      <Text style={styles.label}>Color</Text>
      <View style={styles.colorContainer}>
        <View style={[styles.colorOption, { backgroundColor: 'green' }]} />
        <View style={[styles.colorOption, { backgroundColor: 'blue' }]} />
      </View>

      <Text style={styles.label}>Size</Text>
      <View style={styles.sizeSelector}>
        <Text>Choose your size</Text>
      </View>

      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Text style={styles.total}>TOTAL: ${299 * quantity}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  backButton: { fontSize: 16, color: 'blue' },
  productImage: { width: '100%', height: 200, marginBottom: 16 },
  price: { fontSize: 24, color: 'teal', textAlign: 'center' },
  productName: { fontSize: 18, textAlign: 'center', marginVertical: 8 },
  label: { fontSize: 16, marginVertical: 8 },
  colorContainer: { flexDirection: 'row' },
  colorOption: { width: 20, height: 20, borderRadius: 10, marginHorizontal: 4 },
  sizeSelector: { padding: 10, borderColor: 'gray', borderWidth: 1, marginVertical: 8 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 8 },
  quantityText: { marginHorizontal: 16, fontSize: 16 },
  total: { fontSize: 18, textAlign: 'center', marginVertical: 8 },
  addToCartButton: { backgroundColor: 'blue', padding: 16, borderRadius: 8, alignItems: 'center' },
  addToCartText: { color: 'white', fontSize: 16 },
});

export default ProductDetailScreen;