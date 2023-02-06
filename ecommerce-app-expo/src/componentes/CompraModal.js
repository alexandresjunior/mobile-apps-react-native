import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalContext } from "../context/GlobalContext";

const CompraModal = ({ visivel, setVisivel, texto, botao, finalizarCompra }) => {
    const navigation = useNavigation();

    const { esvaziarCarrinho } = useContext(GlobalContext);

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
                        <Text style={estilos.texto}>{texto}</Text>

                        <TouchableOpacity
                            style={estilos.botao}
                            onPress={() => {
                                setVisivel(false)
                                navigation.navigate(botao.link)
                                !!finalizarCompra && esvaziarCarrinho()

                                // if (finalizarCompra) {
                                //     esvaziarCarrinho()
                                // }
                            }}>
                            <Text style={estilos.textoBotao}>{botao.texto}</Text>
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
    texto: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16
    },
    botao: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FF7A00"
    },
    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    }
})