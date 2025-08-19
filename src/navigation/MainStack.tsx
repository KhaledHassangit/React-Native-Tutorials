import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../constants/types";
import { StackNames } from "../constants/enmus";

import AuthStack from "./Stacks/AuthStack";
import MainTabs from "./Tabs/MainTabs";
import SharedStack from "./Stacks/SharedStack";

export const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackNames.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={StackNames.MAIN_TABS} component={MainTabs} />
      <Stack.Screen name={StackNames.SHARED_STACK} component={SharedStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
