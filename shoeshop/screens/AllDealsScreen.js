import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const AllDealsScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>All Deals</Text>
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categorySection}>
      {['Electronics', 'Fashion', 'Beauty'].map(category => (
        <View key={category} style={styles.category}>
          <Image source={{ uri: 'IMAGE_URL' }} style={styles.categoryImage} />
          <Text>{category}</Text>
        </View>
      ))}
    </ScrollView>

    <View style={styles.promoSection}>
      <Text style={styles.promoTitle}>Shoes</Text>
      <Text style={styles.promoDiscount}>50% off</Text>
      <TouchableOpacity style={styles.promoButton}>
        <Text style={styles.promoButtonText}>Buy now</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionTitle}>Recommended for you</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.recommendedItem}>
          <Image source={{ uri: 'IMAGE_URL' }} style={styles.recommendedImage} />
          <Text>Items</Text>
          <Text>$299</Text>
        </View>
      ))}
    </ScrollView>
  </ScrollView>
);

export default AllDealsScreen;
