/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNames } from '../../constants/enmus';
import { RootStackParamList } from '../../constants/types';
import { styles } from './styles';

const LoginScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (value: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value);
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    if (email && password) {
      navigate(StackNames.MAIN_TABS);
    } else {
      Alert.alert('Error', 'Enter your email and password');
    }
  };

  const isDisabled = !email || !password; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[styles.button, isDisabled && { backgroundColor: '#ccc' }]}
        onPress={handleLogin}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
