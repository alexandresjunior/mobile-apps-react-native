import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const SectionHeader = ({ titulo, link }) => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
            <TouchableOpacity onPress={() => { }}>
                <Text style={estilos.link}>{link}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SectionHeader;

const estilos = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    link: {
        marginTop: 10,
        textAlign: "center",
        color: "#FF7A00",
    }
})