import React, { useState } from 'react';
import { View, Text, Button, Picker, Switch } from 'react-native';
import styles from '../styles/styles';

const FilterScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(''); // Thay đổi để lưu 1 danh mục được chọn
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showOnlyOnSale, setShowOnlyOnSale] = useState(false);
  const [minimumRating, setMinimumRating] = useState(0);

  // Danh sách danh mục
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
      <Text style={styles.title}>Filter Products</Text>

      {/* Picker for Categories */}
      <Text style={styles.filterSectionTitle}>Categories</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value)}
        style={styles.picker}
      >
        <Picker.Item label="Select a Category" value="" />
        {categories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>

      {/* Other filters */}
      <Text style={styles.filterSectionTitle}>Price Range</Text>
      <Text>${priceRange[0]} - ${priceRange[1]}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.filterSectionTitle}>Show Only On Sale</Text>
        <Switch
          value={showOnlyOnSale}
          onValueChange={(value) => setShowOnlyOnSale(value)}
        />
      </View>

      <Text style={styles.filterSectionTitle}>Minimum Rating</Text>
      <Text>{minimumRating} Stars & Up</Text>

      {/* Apply Filters Button */}
      <Button title="Apply Filters" onPress={applyFilters} />
    </View>
  );
};

export default FilterScreen;
