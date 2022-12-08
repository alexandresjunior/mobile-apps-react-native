import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Checkbox from 'expo-checkbox';
import NavBar from "./components/NavBar";
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    return (
        <>
            <View style={estilos.cabecalho}></View>

            <NavBar />

            <View style={estilos.tela}>
                <Text style={estilos.titulo}>Sign In</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text>Bem-vindo! Não possui uma conta?</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={estilos.linkSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={estilos.input}
                    placeholder="E-mail"
                    keyboardType="email"
                    onChangeText={() => { }}
                    defaultValue={""}
                />

                <TextInput
                    style={estilos.input}
                    placeholder="Senha"
                    keyboardType="password"
                    onChangeText={() => { }}
                    defaultValue={""}
                />

                <TouchableOpacity style={estilos.botaoLogIn} onPress={() => { navigation.navigate('Tab Rotas') }}>
                    <Text style={estilos.textoBotaoLogIn}>Log In</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Checkbox
                        style={estilos.checkbox}
                        value={true}
                        onValueChange={() => { }}
                        color={true ? "#FF7A00" : undefined}
                    />

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginStart: 10 }}>Mantenha-me conectado</Text>

                        <TouchableOpacity style={{}} onPress={() => { }}>
                            <Text style={estilos.linkSignUp}>Esqueci a senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={estilos.separador}>OR</Text>

                <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { }}>
                    <MaterialCommunityIcon name="google" size={20} color="#000000" />
                    <Text style={estilos.textoBotaoSignUp}>Entrar com Gmail</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { }}>
                    <MaterialCommunityIcon name="apple" size={20} color="#000000" />
                    <Text style={estilos.textoBotaoSignUp}>Entrar com Apple ID</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default SignIn;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    cabecalho: {
        height: 250,
        backgroundColor: "#FF7A00"
    },
    separador: {
        color: "#FF7A00",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10
    },
    linkSignUp: {
        color: "#FF7A00",
        paddingStart: 5
    },
    titulo: {
        marginTop: 5,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        marginTop: 20,
        height: 50,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 10,

    },
    botaoLogIn: {
        backgroundColor: "#FF7A00",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: "100%",
        marginTop: 20,
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
        borderColor: "#D9D9D9",
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textoBotaoSignUp: {
        textAlign: "center",
        marginStart: 5
    }
})