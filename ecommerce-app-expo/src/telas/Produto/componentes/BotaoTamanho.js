import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BotaoTamanho = ({ label, tamanho, setTamanho }) => {
    return (
        <TouchableOpacity
            style={(label === tamanho) ? [estilos.botaoSelecionado, estilos.botao] : estilos.botao}
            onPress={() => { setTamanho(label) }}
        >
            <Text style={{ fontSize: 16 }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default BotaoTamanho;

const estilos = StyleSheet.create({
    botao: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 20,
        marginEnd: 20
    },
    botaoSelecionado: {
        backgroundColor: "#FFA959",
        borderColor: "#FFA959"
    }
})