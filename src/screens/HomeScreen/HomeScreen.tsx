import React from "react";
import { View } from "react-native";

import Header from "../../components/Header/Header";
import MainNews from "../../components/Header/MainNews/MainNews";



const HomeScreen: React.FC = () => {
    return (
        <View>
            <Header/>
            <MainNews/>
        </View>
    );
}


export default HomeScreen;