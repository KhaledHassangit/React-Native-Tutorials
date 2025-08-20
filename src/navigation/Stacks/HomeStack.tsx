import { StackNames } from '../../constants/enmus';
import { Stack } from '../MainStack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ArticleDetails from '../../screens/ArticleDetails/ArticleDetails';
import SettingScreen from '../../screens/Settings/SettingScreen';



const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackNames.HOME_STACK} component={HomeScreen} />
      <Stack.Screen name={StackNames.ARTICLE_STACK} component={ArticleDetails} />
      <Stack.Screen name={StackNames.SETTINGS_STACK} component={SettingScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack