import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Thêm icon cho giỏ hàng
import axios from 'axios';

const AccountScreen = ({ route, navigation }) => {
  const { user } = route.params || {}; // Lấy thông tin người dùng từ params
  const [newPassword, setNewPassword] = useState(''); // Trạng thái mật khẩu mới
  const [newFullName, setNewFullName] = useState(user ? user.fullname : ''); // Trạng thái tên mới
  const [isEditingPassword, setIsEditingPassword] = useState(false); // Trạng thái chỉnh sửa mật khẩu
  const [isEditingName, setIsEditingName] = useState(false); // Trạng thái chỉnh sửa tên
  
  const handleChangePassword = async () => {
    if (!newPassword) {
      Alert.alert('Error', 'Please enter a new password');
      return;
    }

    try {
      // Gửi yêu cầu PUT để cập nhật mật khẩu
      const response = await axios.put(apiUrl, {
        password: newPassword, // Cập nhật mật khẩu mới
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Password changed successfully');
        setIsEditingPassword(false); // Đóng form đổi mật khẩu
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to change password. Please try again.');
    }
  };

  // Xử lý đổi tên
  const handleChangeName = async () => {
    if (!newFullName) {
      Alert.alert('Error', 'Please enter a new name');
      return;
    }

    try {
      // Gửi yêu cầu PUT để cập nhật tên
      const response = await axios.put(apiUrl, {
        fullname: newFullName, // Cập nhật tên mới
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Name changed successfully');
        setIsEditingName(false); // Đóng form đổi tên
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to change name. Please try again.');
    }
  };

  // Điều hướng tới giỏ hàng
  const navigateToCart = () => {
    navigation.navigate('Cart')
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Thông tin tài khoản</Text>

        {/* Hiển thị hình đại diện */}
        <Image source={{ uri: user.image }} style={styles.avatar} />

        {/* Chỉnh sửa tên */}
        {isEditingName ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.input}
              value={newFullName}
              onChangeText={setNewFullName}
              placeholder="Enter new full name"
            />
            <Button title="Save Name" onPress={handleChangeName} />
            <Button title="Cancel" onPress={() => setIsEditingName(false)} />
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Họ tên: {newFullName || user.fullname}</Text>
            <TouchableOpacity onPress={() => setIsEditingName(true)}>
              <Text style={styles.editText}>Change Name</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Chỉnh sửa mật khẩu */}
        {isEditingPassword ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              placeholder="Enter new password"
            />
            <Button title="Save Password" onPress={handleChangePassword} />
            <Button title="Cancel" onPress={() => setIsEditingPassword(false)} />
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Mật khẩu: ********</Text>
            <TouchableOpacity onPress={() => setIsEditingPassword(true)}>
              <Text style={styles.editText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Các thông tin khác */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Tên đăng nhập: {user.username}</Text>
          <Text style={styles.infoText}>Địa chỉ: {user.address}</Text>
          <Text style={styles.infoText}>Mã người dùng: {user.id}</Text>
        </View>

        {/* Nút Giỏ hàng */}
        <TouchableOpacity style={styles.cartButton} onPress={navigateToCart}>
          <Ionicons name="cart" size={24} color="white" />
          <Text style={styles.cartText}>Giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f8f8f8', // Màu nền nhẹ nhàng
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Màu chữ tối để dễ đọc
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc', // Thêm viền cho avatar
  },
  infoContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#333', // Màu chữ tối để dễ đọc
  },
  editText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  editContainer: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  cartButton: {
    flexDirection: 'row',
    backgroundColor: '#007bff', // Màu xanh cho nút giỏ hàng
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5, // Đổ bóng cho nút
  },
  cartText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
});

export default AccountScreen;
