import React, { useState } from 'react';
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
import LoginScreen from '../screens/LoginScreen'; // Import màn hình Login
import RegisterScreen from '../screens/RegisterScreen'; // Import màn hình Register

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Điều hướng màn hình khi người dùng chưa đăng nhập */}
          {!isLoggedIn ? (
            <>
              <Stack.Screen
                name="Login"
                options={{ headerShown: false }} // Ẩn header khi ở màn hình Login
              >
                {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
              <Stack.Screen
                name="Register"
                component={RegisterScreen} // Màn hình đăng ký
                options={{ title: 'Register' }}
              />
            </>
          ) : (
            <>
              {/* Các màn hình chính sau khi đăng nhập */}
              <Stack.Screen
                name="Home"
                component={AllDealsScreen}
                options={{ title: 'ShoeShop' }}
              />
              <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ title: 'Cart' }}
              />
              <Stack.Screen
                name="Payment"
                component={PaymentScreen}
                options={{ title: 'Payment' }}
              />
              <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{ title: 'Product List' }}
              />
              <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={{ title: 'Product Details' }}
              />
              <Stack.Screen
                name="Filter"
                component={FilterScreen}
                options={{ title: 'Filters' }}
              />
              <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ title: 'Checkout' }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppNavigator;
