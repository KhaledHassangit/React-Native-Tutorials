 import React from 'react'
import LoginScreen from '../../screens/Auth/LoginScreen';
import { StackNames } from '../../constants/enmus';
import { Stack } from '../MainStack';



const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackNames.AUTH_STACK} component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack