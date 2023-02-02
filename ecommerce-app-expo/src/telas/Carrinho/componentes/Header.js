import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { GlobalContext } from "../../../contexts/GlobalContext";

const Header = () => {
    const navigation = useNavigation();

    const { esvaziarCarrinho } = useContext(GlobalContext);

    return (
        <View style={estilos.container}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <AntDesignIcon name="arrowleft" size={20} color="#000000" />
            </TouchableOpacity>

            <Text style={estilos.secao}>Minhas Compras</Text>

            <TouchableOpacity onPress={esvaziarCarrinho}>
                <Text style={estilos.link}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const estilos = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    secao: {
        fontSize: 18,
        fontWeight: "bold"
    },
    link: {
        color: "#FF7A00",
    }
})