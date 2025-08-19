import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../constants/types";

import ArticleDetails from "../screens/ArticleDetails/ArticleDetails";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;
