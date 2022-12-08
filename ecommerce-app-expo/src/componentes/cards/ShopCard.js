import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const ShopCard = ({ imagem, produto, navigation }) => {
    const aoClicarNoProduto = () => {
        navigation.navigate('Produto', navigation);
    }

    return (
        <View style={estilos.container} onPress={() => { }}>
            <Image source={imagem} style={estilos.imagem} />

            <View style={estilos.reviews}>
                <AntDesignIcon name="star" size={15} color="#FDCC0D" />
                <Text style={estilos.textoReview}>4.9</Text>
            </View>

            <View style={estilos.favoritos}>
                <TouchableOpacity onPress={() => { }}>
                    <AntDesignIcon name="hearto" size={18} color="#000000" />
                </TouchableOpacity>
            </View>

            <View style={estilos.conteudo} onPress={() => { }}>
                <Text>{produto.nome}</Text>
                <View style={estilos.informacoes}>
                    <Text style={estilos.preco}>{produto.preco}</Text>
                    <TouchableOpacity onPress={() => aoClicarNoProduto()}>
                        <AntDesignIcon name="arrowright" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ShopCard;

const estilos = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
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
    },
    reviews: {
        flexDirection: "row",
        position: "absolute",
        top: 15,
        marginStart: 10,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5
    },
    textoReview: {
        fontSize: 14,
        fontWeight: "bold",
        marginStart: 5
    },
    favoritos: {
        flexDirection: "row",
        position: "absolute",
        top: 15,
        marginStart: 130,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5
    },
    conteudo: {
        padding: 15,
    },
    informacoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
    },
    imagem: {
        width: 170,
        height: 170
    },
    preco: {
        fontSize: 18,
        fontWeight: "bold"
    }
})