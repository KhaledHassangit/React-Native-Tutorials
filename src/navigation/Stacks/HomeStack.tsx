import { StackNames } from '../../constants/enmus';
import { Stack } from '../MainStack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ArticleDetails from '../../screens/ArticleDetails/ArticleDetails';



const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackNames.HOME_STACK} component={HomeScreen} />
      <Stack.Screen name={StackNames.ARTICLE_STACK} component={ArticleDetails} />
    </Stack.Navigator>
  )
}

export default HomeStack