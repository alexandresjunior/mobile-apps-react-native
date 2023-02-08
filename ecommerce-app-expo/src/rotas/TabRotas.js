import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import Home from "../telas/Home";
import Loja from "../telas/Loja";
import Carrinho from "../telas/Carrinho"
import { GlobalContext } from '../contextos/GlobalContext';

const Tab = createBottomTabNavigator();

const TabRotas = () => {

    const { itens } = useContext(GlobalContext);
    let variavel = {}
    itens.length ? variavel = {tabBarBadge: itens.length} : variavel = {}

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                let iconName = "home";

                if (route.name === "Loja") {
                    iconName = "handbag";

                    return <SimpleLineIconsIcon name={iconName} size={size} color={color} />
                }
                
                if (route.name === "Carrinho") {return <IoniconsIcon name={"cart"} size={size} color={color} />}

                return <IoniconsIcon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#FF7A00",
            tabBarInactiveTintColor: "#000000"
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Loja" component={Loja} />
            <Tab.Screen name="Carrinho" component={Carrinho} options={ variavel } />
        </Tab.Navigator>
    )
}

export default TabRotas;
