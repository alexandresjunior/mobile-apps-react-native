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

            <View>
                <View style={[estilos.row, { width: 220 }]}>
                    <Text style={estilos.titulo}>{item.produto.nome}</Text>

                    <TouchableOpacity onPress={() => removerItemDoCarrinho(item)}>
                        <FontAwesomeIcon name="trash-o" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <Text style={estilos.tamanho}>Tamanho: {item.tamanho}</Text>

                <View style={estilos.row}>
                    <Text style={estilos.preco}>R$ {item.produto.preco}</Text>

                    <View style={estilos.row}>
                        <TouchableOpacity onPress={() => { }} style={estilos.botao}>
                            <AntDesignIcon name="minus" size={15} color="#000" />
                        </TouchableOpacity>

                        <Text style={estilos.quantidade}>{item.quantidade}</Text>

                        <TouchableOpacity onPress={() => { }} style={estilos.botao}>
                            <AntDesignIcon name="plus" size={15} color="#000" />
                        </TouchableOpacity>
                    </View>
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
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagem: {
        width: 90,
        height: 90
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titulo: {
        fontSize: 14
    },
    tamanho: {
        fontSize: 12,
        marginTop: 10
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
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 10
    }
})