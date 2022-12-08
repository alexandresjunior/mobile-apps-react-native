import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import Home from "../telas/Home";
import Loja from "../telas/Loja";

const Tab = createBottomTabNavigator();

const TabRotas = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                let iconName = "home";

                if (route.name === "Loja") {
                    iconName = "handbag";

                    return <SimpleLineIconsIcon name={iconName} size={size} color={color} />
                }

                return <IoniconsIcon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#FF7A00",
            tabBarInactiveTintColor: "#000000"
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Loja" component={Loja} />
        </Tab.Navigator>
    )
}

export default TabRotas;
