import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const CartaoVertical = ({ imagem }) => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <Image source={imagem} style={estilos.imagem} />
        </TouchableOpacity>
    )
}

export default CartaoVertical;

const estilos = StyleSheet.create({
    imagem: {
        marginStart: -10,
        width: 220,
        height: 220,
        borderRadius: 20
    }
})
