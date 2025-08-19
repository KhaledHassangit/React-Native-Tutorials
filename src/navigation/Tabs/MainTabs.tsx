import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES, StackNames } from "../../constants/enmus";
import FavouriteScreen from "../../screens/Favourites/FavouriteScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from "../Stacks/HomeStack";

const Tab = createBottomTabNavigator();

const renderHomeIcon = ({ color, size }: { color: string; size: number }) => (
    <Ionicons name="home" color={color} size={size} />
);

const renderFavouritesIcon = ({ color, size }: { color: string; size: number }) => (
    <Ionicons name="heart" color={color} size={size} />
);

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: renderHomeIcon,
                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "grey"
                }}
                name={StackNames.HOME_STACK}
                component={HomeStack}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: "Favourites",
                    tabBarIcon: renderFavouritesIcon,
                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "grey"

                }}
                name={ROUTES.FAVOURITES}
                component={FavouriteScreen}
            />
        </Tab.Navigator>
    );
}

export default MainTabs