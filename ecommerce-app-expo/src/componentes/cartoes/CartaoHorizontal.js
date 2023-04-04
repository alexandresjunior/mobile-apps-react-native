import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CartaoHorizontal = ({ titulo, texto, textoBotao, imagem }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.conteudo}>
                <View>
                    <Text style={estilos.titulo}>{titulo}</Text>
                    <Text style={estilos.texto}>{texto}</Text>

                    <TouchableOpacity style={estilos.botao} onPress={() => { }}>
                        <Text style={estilos.textoBotao}>{textoBotao}</Text>
                    </TouchableOpacity>
                </View>

                <Image source={imagem} style={estilos.imagem} />
            </View>
        </View>
    )
}

export default CartaoHorizontal;

const estilos = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        marginEnd: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    conteudo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagem: {
        marginTop: 5,
        width: 120,
        height: 120
    },
    texto: {
        marginTop: 10,
        width: 180
    },
    botao: {
        backgroundColor: "#FFA959",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        width: 140,
        marginTop: 15
    },
    textoBotao: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold"
    }
})