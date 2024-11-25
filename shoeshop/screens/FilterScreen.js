import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/styles';

const FilterScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showOnlyOnSale, setShowOnlyOnSale] = useState(false);
  const [minimumRating, setMinimumRating] = useState('');

  const categories = ['Electronics', 'Fashion', 'Beauty', 'Home', 'Toys'];

  const applyFilters = () => {
    navigation.navigate('ProductList', {
      filters: {
        category: selectedCategory,
        priceRange,
        showOnlyOnSale,
        minimumRating,
      },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Text style={styles.title}>Filter Products</Text>

        {/* Category Picker */}
        <Text style={styles.filterSectionTitle}>Category</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select a Category" value="" />
          {categories.map((category, index) => (
            <Picker.Item key={index} label={category} value={category} />
          ))}
        </Picker>

        {/* Price Range */}
        <Text style={styles.filterSectionTitle}>Price Range</Text>
        <View style={styles.priceInputContainer}>
          <TextInput
            style={styles.priceInput}
            placeholder="Min Price"
            keyboardType="numeric"
            value={priceRange.min}
            onChangeText={(value) => setPriceRange({ ...priceRange, min: value })}
          />
          <Text style={styles.priceRangeSeparator}>-</Text>
          <TextInput
            style={styles.priceInput}
            placeholder="Max Price"
            keyboardType="numeric"
            value={priceRange.max}
            onChangeText={(value) => setPriceRange({ ...priceRange, max: value })}
          />
        </View>

        {/* On Sale Switch */}
        <View style={styles.switchContainer}>
          <Text style={styles.filterSectionTitle}>Show Only On Sale</Text>
          <Switch
            value={showOnlyOnSale}
            onValueChange={(value) => setShowOnlyOnSale(value)}
          />
        </View>

        {/* Minimum Rating */}
        <Text style={styles.filterSectionTitle}>Minimum Rating</Text>
        <TextInput
          style={styles.ratingInput}
          placeholder="Minimum Rating (1-5)"
          keyboardType="numeric"
          value={minimumRating}
          onChangeText={(value) => setMinimumRating(value)}
        />

        {/* Apply Filters Button */}
        <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FilterScreen;
