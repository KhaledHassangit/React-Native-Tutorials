import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNames } from '../../constants/enmus';
import { RootStackParamList } from '../../constants/types';

const LoginScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();


  return (
    <TouchableOpacity>
      <Text onPress={() => navigate(StackNames.MAIN_TABS)}>
        Welcome!
      </Text>
    </TouchableOpacity>
  );
};

export default LoginScreen;
