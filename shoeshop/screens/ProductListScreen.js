import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Button, FlatList, TouchableOpacity  } from 'react-native';
import styles from '../styles/styles';
import Menu from './Menu'


const ProductListScreen = ({ route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://6738dde0a3a36b5a62ed5fff.mockapi.io/product?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);

  return ( 
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{category} Products</Text>

      {/* Product List */} 
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={styles.productItem} key={index}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="+" onPress={() => {}} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Menu navigation={navigation} />
    </View>

  );
};

export default ProductListScreen;
