import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { deletarCarrinho } from "../../../servicos/local/Carrinho";

const FinalizarCompraModal = ({ modalVisible, setModalVisible, navigation }) => {
    const finalizarCompra = async () => {
        setModalVisible(!modalVisible);
        // await deletarCarrinho();
        navigation.navigate("Home");
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Compra finalizada!</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => finalizarCompra()}
                        >
                            <Text style={styles.textStyle}>Voltar para Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modalView: {
        marginHorizontal: 10,
        backgroundColor: "white",
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
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#FF7A00",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16
    }
});

export default FinalizarCompraModal;