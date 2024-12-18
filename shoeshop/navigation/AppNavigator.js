import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from '../logic/CartContext';
import AllDealsScreen from '../screens/AllDealsScreen';
import ProductListScreen from '../screens/ProductListScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import FilterScreen from '../screens/FilterScreen';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen';
import Menu from '../screens/Menu';
import ProductSearchScreen from '../screens/ProductSearchScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [user, setUser] = useState(null); // Lưu thông tin người dùng sau khi đăng nhập

  return (
    <CartProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          // Nếu đã đăng nhập, điều hướng đến màn hình chính
          <Stack.Navigator>
            <Stack.Screen name="Home" component={AllDealsScreen} options={{ title: 'ShoeShop' }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
            <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Payment' }} />
            <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Product List' }} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
            <Stack.Screen name="Filter" component={FilterScreen} options={{ title: 'Filters' }} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
            <Stack.Screen name="ProductSearch" component={ProductSearchScreen} options={{ title: 'Search Products' }} />
            <Stack.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }} initialParams={{ user }} />
            <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} initialParams={{ user }} />
          </Stack.Navigator>
        ) : (
          // Nếu chưa đăng nhập, điều hướng đến màn hình đăng nhập
          <AuthNavigator />
        )}
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppNavigator;
