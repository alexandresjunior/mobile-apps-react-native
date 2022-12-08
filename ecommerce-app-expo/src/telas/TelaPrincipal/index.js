import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import img from "../../../assets/tela_principal.png";
import { useNavigation } from '@react-navigation/native';

const TelaPrincipal = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Image source={img} style={estilos.imagem} />

            <Text style={estilos.titulo}>Todas as suas compras num só app!</Text>
            <Text style={estilos.subtitulo}>Venda seus produtos da maneira mais inteligente e rápida para obter dinheiro imediato e uma consciência mais limpa.</Text>

            <View style={estilos.botoes}>
                <TouchableOpacity style={estilos.botaoLogIn} onPress={() => { navigation.navigate('Sign In') }}>
                    <Text style={estilos.textoBotaoLogIn}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { navigation.navigate('Sign In') }}>
                    <Text style={estilos.textoBotaoSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    imagem: {
        marginTop: 100,
        width: 360,
        height: 360
    },
    titulo: {
        margin: 25,
        marginBottom: 15,
        fontSize: 35
    },
    subtitulo: {
        margin: 25,
        marginTop: 0,
        fontSize: 16
    },
    botoes: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    botaoLogIn: {
        backgroundColor: "#FF7A00",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 170,
        marginStart: 25
    },
    textoBotaoLogIn: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    botaoSignUp: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 170,
        marginEnd: 25
    },
    textoBotaoSignUp: {
        textAlign: "center",
        color: "#FF7A00",
        fontWeight: "bold"
    }
})

export default TelaPrincipal;
