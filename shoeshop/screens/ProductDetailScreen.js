import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Picker } from 'react-native'; // Import Picker
import Menu from './Menu';
import { useCart } from '../logic/CartContext'; 

const ProductDetailScreen = ({ navigation, route }) => {
  const { productId } = route.params; // Lấy productId từ route params
  const [product, setProduct] = useState(null); // Lưu dữ liệu sản phẩm
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(''); // selected size
  const [selectedColor, setSelectedColor] = useState(''); // selected color
  const { addToCart } = useCart();


  // Fetch product details from API
  useEffect(() => {
    fetch(`https://6738dde0a3a36b5a62ed5fff.mockapi.io/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data)) // Lưu dữ liệu sản phẩm vào state
      .catch((error) => console.error('Error fetching product data:', error));
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

   const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.productName}>{product.name}</Text>

      {/* Color options */}
      <Text style={styles.label}>Color</Text>
      <View style={styles.colorContainer}>
        {product.color && product.color.length > 0 ? (
          product.color.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorOption,
                { backgroundColor: color.toLowerCase() },
                selectedColor === color && styles.selectedColor, // Highlight selected color
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))
        ) : (
          <Text>No color options available</Text>
        )}
      </View>

      {/* Size options (ComboBox / Picker) */}
      <Text style={styles.label}>Size</Text>
      <Picker
        selectedValue={selectedSize}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedSize(itemValue)}
      >
        {product.size && product.size.length > 0 ? (
          product.size.map((size, index) => (
            <Picker.Item key={index} label={size} value={size} />
          ))
        ) : (
          <Picker.Item label="No size options available" value="" />
        )}
      </Picker>

      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Text style={styles.total}>TOTAL: ${product.price * quantity}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>

      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingBottom: 90,
    padding: 16,
  },
  productImage: { 
    width: '100%', 
    height: 200, 
    marginBottom: 16,
  },
  price: { 
    fontSize: 24, 
    color: 'teal', 
    textAlign: 'center',
  },
  productName: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginVertical: 8,
  },
  label: { 
    fontSize: 16, 
    marginVertical: 8,
  },
  colorContainer: { 
    flexDirection: 'row',
    marginBottom: 16, // Added margin for spacing
  },
  colorOption: { 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    marginHorizontal: 8, 
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: 'black', // Highlight the selected color with a border
  },
  picker: {
    height: 50, 
    width: '100%', 
    marginVertical: 8, 
  },
  quantityContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 8,
  },
  quantityText: { 
    marginHorizontal: 16, 
    fontSize: 16,
  },
  total: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginVertical: 8,
  },
  addToCartButton: { 
    backgroundColor: 'blue', 
    padding: 16, 
    borderRadius: 8, 
    alignItems: 'center',
  },
  addToCartText: { 
    color: 'white', 
    fontSize: 16,
  },
});

export default ProductDetailScreen;
