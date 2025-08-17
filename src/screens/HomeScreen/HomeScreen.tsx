import React from "react";
import { View , TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header/Header";
import MainNews from "../../components/Header/MainNews/MainNews";



const HomeScreen = () => {
    return (
        <View>

            <Header/>
            <MainNews/>

            <View style={styles.content}>
               <Text style={styles.text}>Hello, World!</Text>
            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>

        </View>
    );
}


export default HomeScreen;