import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import modelo from "../../../../assets/modelo_1.png";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { GlobalContext } from "../../../contextos/GlobalContext";

const Item = ({ item }) => {
    const { removerItemDoCarrinho } = useContext(GlobalContext);

    return (
        <View style={estilos.container}>
            <Image source={modelo} style={estilos.imagem} />

            <View style={{ flex: 1 }}>
                <View style={estilos.row}>
                    <Text style={estilos.titulo}>{item.produto.nome}</Text>

                    <TouchableOpacity onPress={() => removerItemDoCarrinho(item)}>
                        <FontAwesomeIcon name="trash-o" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <Text style={estilos.tamanho}>Tamanho: {item.tamanho}</Text>

                <View style={estilos.row}>
                    <Text style={estilos.quantidade}>Preço: R$ {item.produto.preco}</Text>
                    <Text style={estilos.quantidade}>x {item.quantidade} Unidades</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={estilos.titulo}>Total: </Text>
                    <Text style={estilos.preco}>R$ {item.produto.preco * item.quantidade}</Text>
                </View>
            </View>
        </View>
    )
}

export default Item;

const estilos = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: "#fff",
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
        padding: 15,
        alignItems: "center"
    },
    imagem: {
        width: 90,
        height: 90,
        marginEnd: 15
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titulo: {
        fontSize: 16
    },
    tamanho: {
        fontSize: 14,
        marginTop: 5
    },
    preco: {
        fontSize: 18,
        fontWeight: "bold"
    },
    botao: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#fff"
    },
    quantidade: {
        fontSize: 14,
        color: "#CACACA"
    }
})