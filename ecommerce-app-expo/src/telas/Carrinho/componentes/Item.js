import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import modelo1 from "../../../../assets/modelo_1.png";

const Item = () => {
    return (
        <View style={estilos.itemCompra}>
            <View style={{ flexDirection: "row" }}>
                <Image source={modelo1} style={estilos.itemImagem} />

                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 14, marginStart: 10 }}>Camisa de Algodão Regular Fit</Text>

                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesomeIcon style={{ marginStart: 10 }} name="trash-o" size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: 12, marginStart: 10, marginTop: 10 }}>Tamanho: M</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginStart: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>R$ 100,00</Text>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity style={[estilos.botaoNumItens, { marginHorizontal: 10 }]} onPress={() => { }}>
                                <AntDesignIcon name="minus" size={15} color="#000000" />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>2</Text>

                            <TouchableOpacity style={[estilos.botaoNumItens, { marginStart: 10 }]} onPress={() => { }}>
                                <AntDesignIcon name="plus" size={15} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Item;

const estilos = StyleSheet.create({
    itemCompra: {
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
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
    },
    itemImagem: {
        width: 90,
        height: 90,
    },
    botaoNumItens: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FFFFFF"
    }
})