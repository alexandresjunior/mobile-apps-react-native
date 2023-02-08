import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import usuarioIcone from "../../../../assets/usuario_icone.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';

const Header = () => {
    const [nome, setNome] = useState("");

    const [icone, setIcone] = useState(usuarioIcone);

    const obterDadosLogIn = async () => {
        const jsonValue = await AsyncStorage.getItem("usuario");

        const dados = jsonValue != null ? JSON.parse(jsonValue) : null;

        setNome(dados.nome)

        return dados;
    }

    useEffect(() => {
        obterDadosLogIn();

    }, [])

    const selecionarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result)
            setIcone(result.assets[0])
        } else {
            alert('Você não selecionou nenhuma imagem!');
        }
    };

    return (
        <View style={estilos.cabecalho}>
            <View>
                <Text>Bem vindo,</Text>
                <Text style={estilos.nome}>{nome}</Text>
            </View>
            <TouchableOpacity onPress={selecionarImagem}>
                <Image source={icone} style={estilos.iconeUsuario} />
            </TouchableOpacity>
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
        height: 50,
        borderRadius: 25
    }
})