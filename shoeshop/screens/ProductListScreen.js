import React from 'react';
import { View, Text, ScrollView, Image, Button, FlatList } from 'react-native';
import styles from '../styles/styles';

const ProductListScreen = () => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryTabs}>
      {['Best Sales', 'Best Matched', 'Popular'].map(tab => (
        <TouchableOpacity key={tab} style={styles.tab}>
          <Text>{tab}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <FlatList
      data={Array.from({ length: 5 })}
      renderItem={({ item, index }) => (
        <View style={styles.productItem} key={index}>
          <Image source={{ uri: 'IMAGE_URL' }} style={styles.productImage} />
          <Text>Item name</Text>
          <Text>$999</Text>
          <Button title="+" onPress={() => {}} />
        </View>
      )}
    />
  </View>
);

export default ProductListScreen;
