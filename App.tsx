import { NavigationContainer } from '@react-navigation/native';
import "./gesture-handler"


import MainStack from './src/navigation/MainStack';




function App() {
  return (
      <NavigationContainer>

        <MainStack/> 

      </NavigationContainer>

  )
}


export default App;


