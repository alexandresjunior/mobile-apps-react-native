import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { GlobalContext } from "../../../contextos/GlobalContext";
import CompraModal from "../../../componentes/CompraModal";

const ResumoCompra = () => {
    const { itens } = useContext(GlobalContext);

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        for (let i in itens) {
            setSubtotal(subtotal + itens[i].produto.preco * itens[i].quantidade)
        }
    }, [itens]);

    const voucher = subtotal === 0 ? 0 : 100;
    const taxa = subtotal === 0 ? 0 : 20;

    const total = subtotal - voucher + taxa;

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <View style={estilos.conteudo}>
                <TextInput
                    style={estilos.input}
                    placeholder="Código Promocional"
                    keyboardType="text"
                    onChangeText={() => { }}
                    defaultValue={""}
                />

                <TouchableOpacity style={estilos.botaoPromocao} onPress={() => { }}>
                    <Text style={estilos.textoBotaoPromocao}>Aplicar</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.conteudo}>
                <Text style={estilos.subtitulo}>Sub-total</Text>
                <Text style={estilos.texto}>R$ {subtotal}</Text>
            </View>

            <View style={estilos.conteudo}>
                <Text style={estilos.subtitulo}>Voucher</Text>
                <Text style={estilos.texto}>- R$ {voucher}</Text>
            </View>

            <View style={estilos.conteudo}>
                <Text style={estilos.subtitulo}>Taxa de Entrega</Text>
                <Text style={estilos.texto}>R$ {taxa}</Text>
            </View>

            <View style={estilos.separador} />

            <View style={estilos.conteudo}>
                <Text style={estilos.titulo}>Total</Text>
                <Text style={estilos.titulo}>R$ {total}</Text>
            </View>

            <CompraModal
                mensagem={"Compra finalizada!"}
                botao={{ texto: "Nova compra", redirectTo: "Loja" }}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

            <TouchableOpacity style={estilos.botao} onPress={() => setModalVisible(true)}>
                <Text style={estilos.textoBotao}>Finalizar Compra</Text>
            </TouchableOpacity>
        </>
    )
}

export default ResumoCompra;

const estilos = StyleSheet.create({
    conteudo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15
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
    botao: {
        backgroundColor: "#FF7A00",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 190,
        margin: 25,
        padding: 15,
        alignSelf: "center"
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    separador: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#CACACA"
    },
    input: {
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 15,
        flex: 0.9,
        backgroundColor: "white"
    },
    botaoPromocao: {
        backgroundColor: "#FF7A00",
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 100,
    },
    textoBotaoPromocao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    }
})