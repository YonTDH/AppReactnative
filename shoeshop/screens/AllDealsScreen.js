import React, { useState, useEffect } from 'react'; // Import useState, useEffect từ React
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/styles';
import Menu from './Menu'

const AllDealsScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // Fetch categories data
    fetch('https://6738dde0a3a36b5a62ed5fff.mockapi.io/category')
      .then((response) => response.json())
      .then((data) => setCategories(data));

    // Fetch recommended products data
    fetch('https://6738dde0a3a36b5a62ed5fff.mockapi.io/product')
      .then((response) => response.json())
      .then((data) => setRecommendedProducts(data));
  }, []); 

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Home</Text>

        {/* Search and Filter Section */}
        <View style={styles.searchFilterContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
          />
          <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Filter')}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917103.png' }}
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
        <View style={styles.promoSection}>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTitle}>Shoes</Text>
            <Text style={styles.promoDiscount}>50% off</Text>
            <TouchableOpacity
              style={styles.promoButton}
              onPress={() => navigation.navigate('ProductList', { category: 'Shoes' })}
            >
              <Text style={styles.promoButtonText}>Buy now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: 'https://myshoes.vn/image/cache/catalog/2024/adidas/ad5/giay-adidas-ny-90-nam-trang-xanh-la-01-100x100.jpg.webp' }}
            style={styles.promoImage}
          />
        </View>

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
