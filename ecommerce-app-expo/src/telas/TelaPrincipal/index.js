import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import img from "../../../assets/tela_principal.png";

const TelaPrincipal = () => {
    return (
        <View>
            <Image source={img} style={estilos.imagem} />
            <Text style={estilos.titulo}>Todas as suas compras num só app!</Text>
            <Text style={estilos.subtitulo}>Venda seus dispositivos da maneira mais inteligente e rápida para obter dinheiro imediato e uma consciência mais limpa.</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    imagem: {
        "marginTop": 100,
        "width": 360,
        "height": 360
    },
    titulo: {
        "margin": 25,
        "marginBottom": 15,
        "fontSize": 35
    },
    subtitulo: {
        "margin": 25,
        "marginTop": 0,
        "fontSize": 16
    }
})

export default TelaPrincipal;
