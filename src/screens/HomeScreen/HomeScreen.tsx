import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import TopNews from "../../components/TopNews/TopNews";


const HomeScreen = () => {

    return (
        <SafeAreaView>

            <ScrollView>
                <Header />
                <MainNews />
                <TopNews />
            </ScrollView>
        </SafeAreaView>
    );
}


export default HomeScreen;