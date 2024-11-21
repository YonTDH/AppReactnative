import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
import Menu from './Menu';

const ProductListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://6738dde0a3a36b5a62ed5fff.mockapi.io/product?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        const validProducts = data.filter((item) => item.id); 
        setProducts(validProducts);
      })
      .catch(() => setProducts([])); 
  }, [category]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{category} Products</Text>

      {products.length === 0 ? (
        <Text style={styles.emptyMessage}>No products found in this category.</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Button
                title="Add to Cart"
                onPress={() =>
                  navigation.navigate('ProductDetail', { productId: item.id })
                } 
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  productItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
});

export default ProductListScreen;
