import React from "react";
import { Image, StyleSheet, View } from "react-native";
import img from "../../../assets/tela_principal.png";

const TelaPrincipal = () => {
    return (
        <View>
            <Image source={img} style={estilos.imagem} />
        </View>
    )
}

const estilos = StyleSheet.create({
    imagem: {
        "marginTop": 120,
        "width": 360,
        "height": 360
    }
})

export default TelaPrincipal;
