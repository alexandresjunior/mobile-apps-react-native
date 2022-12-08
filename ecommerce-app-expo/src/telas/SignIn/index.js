import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Checkbox from 'expo-checkbox';

const SignIn = () => {
    return (
        <>
            <View style={estilos.cabecalho}></View>
            {/* <NavBar /> */}
            <View style={estilos.tela}>
                <View>
                    <Text style={estilos.titulo}>Sign In</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Bem-vindo! Não possui uma conta?</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={estilos.linkSignUp}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TextInput style={estilos.input} placeholder="E-mail" keyboardType="email" onChangeText={() => { }} defaultValue={""} />
                <TextInput style={estilos.input} placeholder="Senha" keyboardType="password" onChangeText={() => { }} defaultValue={""} />

                <TouchableOpacity style={estilos.botaoLogIn} onPress={() => { }}>
                    <Text style={estilos.textoBotaoLogIn}>Log In</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Checkbox
                        style={estilos.checkbox}
                        value={true}
                        onValueChange={() => { }}
                        color={true ? "#FF7A00" : undefined}
                    />
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ marginStart: 10 }}>Mantenha-me conectado</Text>

                        <TouchableOpacity style={{}} onPress={() => { }}>
                            <Text style={estilos.linkSignUp}>Esqueci a senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: "#FF7A00", textAlign: "center" }}>OR</Text>
                </View>


                <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { }}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <MaterialCommunityIcon name="google" size={20} color="#000000" />
                        <Text style={estilos.textoBotaoSignUp}>Entrar com Gmail</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { }}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <MaterialCommunityIcon name="apple" size={20} color="#000000" />
                        <Text style={estilos.textoBotaoSignUp}>Entrar com Apple ID</Text>
                    </View>
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
        height: 200,
        backgroundColor: "#FF7A00"
    },
    linkSignUp: {
        color: "#FF7A00",
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
        marginTop: 20,
    },
    textoBotaoSignUp: {
        textAlign: "center",
        marginStart: 5
    }
})