import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import TopNews from "../../components/TopNews/TopNews";



const HomeScreen = () => {
    return (
        <ScrollView>
            <Header />
            <MainNews />
            <TopNews/>
        </ScrollView>
    );
}


export default HomeScreen;