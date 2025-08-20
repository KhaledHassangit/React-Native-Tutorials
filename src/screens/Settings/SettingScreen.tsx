import { View, Text,  Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../constants/types';
import { StackNames } from '../../constants/enmus';

const SettingScreen = () => {
    const { reset } = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLogout = () => {
      reset({
        index: 0,
        routes: [{ name: StackNames.AUTH_STACK }],
      });
    };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Khaled Hassan</Text>
        <Text style={styles.email}>khaled@example.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

