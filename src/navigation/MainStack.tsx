import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../constants/types";

import AuthStack from "./Stacks/AuthStack";
import { StackNames } from "../constants/enmus";
import MainTabs from "./Tabs/MainTabs";

export const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackNames.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={StackNames.MAIN_TABS} component={MainTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
