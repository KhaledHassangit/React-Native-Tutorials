import React from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'



const Header = () => {
  return (
    <View style={styles.container}>
        <Image  source={{
            uri: 'https://avatars.githubusercontent.com/u/132917415?s=400&u=25d8b2e351436439fdd5928c7d84e458e85e9c03&v=4',
            width: 50,
            height: 50}}/>
        <Text style={styles.title}>MK News</Text>
        <Image style={styles.img} source={require("../../assets/images/bell.webp")}/>
    </View>
  )
}

export default Header