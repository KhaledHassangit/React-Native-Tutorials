 import React from 'react'
import { StackNames } from '../../constants/enmus';
import { Stack } from '../MainStack';
import ArticleDetails from '../../screens/ArticleDetails/ArticleDetails';



const SharedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackNames.ARTICLE_STACK} component={ArticleDetails} />
    </Stack.Navigator>
  )
}

export default SharedStack