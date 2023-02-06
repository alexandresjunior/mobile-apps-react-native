import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const CabecalhoProduto = () => {
    const navigation = useNavigation();

    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.botao} onPress={() => { navigation.goBack() }}>
                <AntDesignIcon name="arrowleft" size={30} color="#000000" />
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao} onPress={() => { navigation.navigate("Carrinho") }}>
                <IoniconsIcon name="cart-outline" size={30} color="#000000" />
            </TouchableOpacity>
        </View>
    )
}

export default CabecalhoProduto;

const estilos = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
        width: "100%",
        padding: 25
    },
    secao: {
        fontSize: 18,
        fontWeight: "bold"
    },
    link: {
        color: "#FF7A00",
    },
    botao: {
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 10,
    }
})