import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CompraModal = ({ visivel, setVisivel, label, botao1, botao2 }) => {
    return (
        <View style={estilos.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visivel}
                onRequestClose={() => { setVisivel(false) }}
            >
                <View style={estilos.container}>
                    <View style={estilos.modal}>
                        <Text style={estilos.label}>{label}</Text>

                        <TouchableOpacity
                            style={estilos.botao}
                            onPress={botao1.onPress}>
                            <Text style={estilos.textoBotao}>{botao1.texto}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={estilos.botaoOutline}
                            onPress={botao2.onPress}>
                            <Text style={estilos.textoBotaoOutline}>{botao2.texto}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CompraModal;

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modal: {
        marginHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 25,
        paddingHorizontal: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    label: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16
    },
    botao: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FF7A00",
        alignSelf: "stretch",
    },
    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
    botaoOutline: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#FF7A00",
        borderWidth: 1,
        marginTop: 10,
        alignSelf: "stretch",
    },
    textoBotaoOutline: {
        color: "#FF7A00",
        fontWeight: "bold",
        textAlign: "center"
    }
})