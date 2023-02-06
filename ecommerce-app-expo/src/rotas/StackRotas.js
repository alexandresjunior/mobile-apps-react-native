import React from "react";
import TelaPrincipal from "../telas/TelaPrincipal";
import SignIn from "../telas/SignIn";
import Carrinho from "../telas/Carrinho";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRotas from "./TabRotas";
import Produto from "../telas/Produto";

const Stack = createNativeStackNavigator();

const StackRotas = () => {
    return (
        <Stack.Navigator
            initialRouteName="Tela Principal"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Tela Principal" component={TelaPrincipal} />
            <Stack.Screen name="Sign In" component={SignIn} />
            <Stack.Screen name="Tab Rotas" component={TabRotas} />
            <Stack.Screen name="Produto" component={Produto} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
        </Stack.Navigator>
    )
}

export default StackRotas;