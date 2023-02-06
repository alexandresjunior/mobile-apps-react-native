import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import usuarioIcone from "../../../../assets/usuario_icone.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
    const [nome, setNome] = useState("");

    const obterDadosLogIn = async () => {
        const jsonValue = await AsyncStorage.getItem("usuario");

        const dados = jsonValue != null ? JSON.parse(jsonValue) : null;

        setNome(dados.nome)

        return dados;
    }

    useEffect(() => {
        obterDadosLogIn();
    }, [])

    return (
        <View style={estilos.cabecalho}>
            <View>
                <Text>Bem vindo,</Text>
                <Text style={estilos.nome}>{nome}</Text>
            </View>
            <Image source={usuarioIcone} style={estilos.iconeUsuario} />
        </View>
    )
}

export default Header;

const estilos = StyleSheet.create({
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nome: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    iconeUsuario: {
        width: 50,
        height: 50
    }
})