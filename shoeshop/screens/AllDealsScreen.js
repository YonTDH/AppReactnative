import React, { useState, useEffect } from 'react'; 
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useCart } from '../logic/CartContext';  // Import useCart to manage cart
import styles from '../styles/styles';
import Menu from './Menu';

const AllDealsScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [promoProduct, setPromoProduct] = useState(null); // State for promo product
  const { addToCart } = useCart(); // Access addToCart function from CartContext

  useEffect(() => {
    // Fetch categories
    fetch('https://6738dde0a3a36b5a62ed5fff.mockapi.io/category')
      .then((response) => response.json())
      .then((data) => setCategories(data));

    // Fetch products and filter the on-sale products with the lowest price
    fetch('https://6738dde0a3a36b5a62ed5fff.mockapi.io/product')
      .then((response) => response.json())
      .then((data) => {
        setRecommendedProducts(data);

        // Filter products on sale and sort by price in ascending order
        const onSaleProducts = data.filter(product => product.sale === true);
        const lowestPriceProduct = onSaleProducts.sort((a, b) => a.price - b.price)[0]; // Get the product with the lowest price
        setPromoProduct(lowestPriceProduct); // Set the promo product
      });
  }, []); 
    const handleAddToCart = () => {
    if (product) {
        addToCart(product, quantity, selectedColor, selectedSize); 
      }
    };
    
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Search and Filter Section */}
        <View style={styles.searchFilterContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
          />

          {/* Search Button */}
          <TouchableOpacity style={styles.searchButton}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917754.png' }} // Search icon
              style={styles.searchIcon}
            />
          </TouchableOpacity>

          {/* Filter Button */}
          <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Filter')}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917103.png' }} // Filter icon
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Categories Section */}
        <Text style={styles.sectionTitle}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categorySection}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.category}
              onPress={() => navigation.navigate('ProductList', { category: category.name })}
            >
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Promo Section */}
        {promoProduct && (
          <View style={styles.promoSection}>
            <View style={styles.promoTextContainer}>
              <Text style={styles.promoTitle}>10% off </Text>
              <Text style={styles.promoDiscount}>Only ${promoProduct.price * 0.9}</Text>

              <TouchableOpacity
                style={styles.promoButton}
                onPress={() => {
                  navigation.navigate('ProductDetail', { productId: promoProduct.id });
                }}
              >
                <Text style={styles.promoButtonText}>ADD TO CART</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.promoImageContainer}>
              <Image
                source={{ uri: promoProduct.image }}
                style={styles.promoImage}
              />
            </View>
          </View>
        )}

        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendedSection}>
          {recommendedProducts.map((product, index) => (
            <TouchableOpacity
              key={index}
              style={styles.recommendedItem}
              onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
            >
              <Image
                source={{ uri: product.image }}
                style={styles.recommendedImage}
              />
              <Text>{product.name}</Text>
              <Text>${product.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <Menu navigation={navigation} />
    </View>
  );
};

export default AllDealsScreen;
