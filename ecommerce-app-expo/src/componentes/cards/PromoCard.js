import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import imagem from "../../../assets/cosmeticos.png";

const PromoCard = () => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Obtenha R$ 100 OFF</Text>

            <View style={estilos.conteudo}>
                <Text style={estilos.texto}>Gaste no mínimo R$ 100 para obter entrega gratuita e voucher promocional para sua próxima compra.</Text>
                <Image source={imagem} style={estilos.imagem} />
            </View>

            <TouchableOpacity style={estilos.botao} onPress={() => { }}>
                <Text style={estilos.textoBotao}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PromoCard;

const estilos = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#FFA959",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20,
    },
    titulo: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold"
    },
    conteudo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    texto: {
        width: 180
    },
    imagem: {
        width: 120,
        height: 120
    },
    botao: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        width: 140
    },
    textoBotao: {
        textAlign: "center",
        fontWeight: "bold"
    },
})