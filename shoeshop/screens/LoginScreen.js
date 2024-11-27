import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


const LoginScreen = ({ setIsLoggedIn, setUser, navigation }) => {
  const [usernameInput, setUsernameInput] = useState(''); // Tên người dùng nhập vào
  const [password, setPassword] = useState(''); // Mật khẩu
  const [loading, setLoading] = useState(false); // Trạng thái loading khi đăng nhập

  const handleLogin = async () => {
    setLoading(true); // Bắt đầu quá trình đăng nhập
    try {
      // Giả sử đây là API của bạn
      const response = await fetch('https://6715394533bc2bfe40b9d1ab.mockapi.io/account');
      const users = await response.json(); // Lấy danh sách người dùng

      // Tìm người dùng có tên và mật khẩu khớp
      const user = users.find(
        (u) => u.username === usernameInput && u.password === password
      );

      if (user) {
        // Đăng nhập thành công
        setLoading(false);
        setIsLoggedIn(true); // Đánh dấu là đã đăng nhập
        setUser(user); // Lưu thông tin người dùng
        navigation.navigate('Home', { username: user.username }); // Truyền tên người dùng vào Home
      } else {
        // Đăng nhập thất bại
        setLoading(false);
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      setLoading(false); // Đảm bảo trạng thái loading được tắt khi có lỗi
      console.error(error); // Ghi lỗi
      Alert.alert('Error', 'Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Input cho tên người dùng */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={usernameInput}
        onChangeText={setUsernameInput}
      />

      {/* Input cho mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Button đăng nhập */}
      <Button
        title={loading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        disabled={loading} // Vô hiệu hóa nút khi đang đăng nhập
      />

      {/* Link đến màn hình đăng ký */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerLink}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  registerLink: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
