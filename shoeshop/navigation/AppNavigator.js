import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllDealsScreen from '../screens/AllDealsScreen';
import ProductListScreen from '../screens/ProductListScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="AllDeals">
      <Stack.Screen name="AllDeals" component={AllDealsScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
