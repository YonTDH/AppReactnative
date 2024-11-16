import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllDealsScreen from '../screens/AllDealsScreen';
import ProductListScreen from '../screens/ProductListScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import FilterScreen from '../screens/FilterScreen';
import CartScreen from '../screens/CartScreen'
import PaymentScreen from '../screens/PaymentScreen'
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="AllDeals">
      <Stack.Screen name="AllDeals" component={AllDealsScreen} options={{ title: 'ShoeShop' }}/>
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }}/>
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Payment' }}/>
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Product List' }}/>
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }}/>
      <Stack.Screen name="Filter" component={FilterScreen} options={{ title: 'Filters' }}/>
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
