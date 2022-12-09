import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import usuarioIcone from "../../../../assets/usuario_icone.png";

const Header = () => {
    return (
        <View style={estilos.cabecalho}>
            <View>
                <Text>Bem vindo,</Text>
                <Text style={estilos.nome}>Alexandre de Souza Jr.</Text>
            </View>
            <Image source={usuarioIcone} style={estilos.iconeUsuario} />
        </View>
    )
}

export default Header;

const estilos = StyleSheet.create({
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nome: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    iconeUsuario: {
        width: 50,
        height: 50
    }
})