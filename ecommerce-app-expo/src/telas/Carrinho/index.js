import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Item from "./componentes/Item";

const Carrinho = () => {
    return (
        <View style={estilos.tela}>
            <View style={estilos.cabecalho}>
                <TouchableOpacity onPress={() => { }}>
                    <AntDesignIcon name="arrowleft" size={20} color="#000000" />
                </TouchableOpacity>

                <Text style={estilos.titulo}>Minhas Compras</Text>

                <TouchableOpacity onPress={() => { }}>
                    <Text style={estilos.textoBotaoLimpar}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <Item />
            <Item />
            <Item />

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                <TextInput style={estilos.input} placeholder="Código Promocional" keyboardType="text" onChangeText={() => { }} defaultValue={""} />

                <TouchableOpacity style={estilos.botao} onPress={() => { }}>
                    <Text style={estilos.textoBotao}>Aplicar</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                <Text style={estilos.subtitulo}>Sub-total</Text>
                <Text style={estilos.texto}>R$ 2.600</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                <Text style={estilos.subtitulo}>Voucher</Text>
                <Text style={estilos.texto}>- R$ 100</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                <Text style={estilos.subtitulo}>Taxa de Entrega</Text>
                <Text style={estilos.texto}>R$ 20</Text>
            </View>

            <View style={{ marginTop: 15, borderBottomWidth: 1, borderBottomColor: "#CACACA" }} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                <Text style={estilos.titulo}>Total</Text>
                <Text style={estilos.titulo}>R$ 2.520</Text>
            </View>

            <TouchableOpacity style={[estilos.botao, { width: 190, margin: 25, padding: 15, alignSelf: "center" }]} onPress={() => { }}>
                <Text style={estilos.textoBotao}>Finalizar Compra</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Carrinho;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold"
    },
    subtitulo: {
        fontSize: 18,
        color: "#7B7B7B"
    },
    texto: {
        fontSize: 18,
        fontWeight: "600"
    },
    textoBotaoLimpar: {
        color: "#FF7A00",
    },
    input: {
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 15,
        flex: 0.9,
    },
    botao: {
        backgroundColor: "#FF7A00",
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 100,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    }
})