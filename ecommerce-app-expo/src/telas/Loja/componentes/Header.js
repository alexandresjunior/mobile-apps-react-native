import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={estilos.container}>
            <View style={estilos.barraDeBusca}>
                <TextInput style={estilos.texto} placeholder="Faça sua busca aqui" keyboardType="text" onChangeText={() => { }} defaultValue={""} />

                <TouchableOpacity onPress={() => { }}>
                    <IoniconsIcon name="search" size={20} color="#D9D9D9" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={estilos.carrinhoCompras} onPress={() => { navigation.navigate("Carrinho") }}>
                <IoniconsIcon name="cart-outline" size={30} color="#000000" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    barraDeBusca: {
        width: 315,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    carrinhoCompras: {
        justifyContent: "center"
    },
    texto: {
        color: "#CACACA"
    }
})