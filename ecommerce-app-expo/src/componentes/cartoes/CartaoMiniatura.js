import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const CartaoMiniatura = ({ imagem, legenda }) => {
    return (
        <TouchableOpacity style={estilos.container} onPress={() => { }}>
            <Image source={imagem} style={estilos.imagem} />
            <Text>{legenda}</Text>
        </TouchableOpacity>
    )
}

export default CartaoMiniatura;

const estilos = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959"
    },
    imagem: {
        width: 50,
        height: 50,
        marginBottom: 15
    }
})