// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Attempting to log in with:', username, password); // Debugging line to check input
    // Basic validation
    if (username.trim() && password) {
      console.log('Login validation passed'); // Confirm validation is passed
      // Placeholder for authentication logic
      Alert.alert('Login Successful', 'You are logged in!', [
        {
          text: 'OK',
          onPress: () => {
            console.log('Alert OK pressed, navigating to PatientsListScreen'); // Confirming Alert dismissal
            navigation.navigate('PatientsListScreen'); // Navigate to PatientsListScreen on success
          },
        },
      ]);
      
    } else {
      Alert.alert('Login Failed', 'Username or password cannot be empty.', [{ text: 'OK' }]);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Healthcare Provider Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#3498db',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
