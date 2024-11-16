import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Menu = ({ navigation }) => (
  <View style={styles.footer}>
    {/* Home */}
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('AllDeals')}>
      <View style={styles.footerIconText}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917033.png' }}
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>Home</Text>
      </View>
    </TouchableOpacity>

    {/* Search */}
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Search')}>
      <View style={styles.footerIconText}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917754.png' }}
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>Search</Text>
      </View>
    </TouchableOpacity>

    {/* Cart */}
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Cart')}>
      <View style={styles.footerIconText}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3916/3916598.png' }}
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>Cart</Text>
      </View>
    </TouchableOpacity>

    {/* Account */}
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Account')}>
      <View style={styles.footerIconText}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917688.png' }}
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>Account</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute', // Đặt footer cố định ở dưới cùng
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIconText: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});

export default Menu;
