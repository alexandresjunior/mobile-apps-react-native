import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { GlobalContext } from "../../../contextos/GlobalContext";
import CompraModal from "../../../componentes/CompraModal";
import { useNavigation } from "@react-navigation/native";

const ResumoCompra = () => {
    const { itens, esvaziarCarrinho } = useContext(GlobalContext);

    const navigation = useNavigation();

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        let soma = 0;

        itens.map((item) => {
            const numItens = item.quantidade;
            const preco = item.produto.preco;

            soma += numItens * preco;
        })

        setSubtotal(soma)
    }, [itens])

    let voucher = subtotal === 0 ? 0 : 100;
    let taxaDeEntrega = subtotal === 0 ? 0 : 20;
    let total = subtotal - voucher + taxaDeEntrega;

    const [visivel, setVisivel] = useState(false);

    const finalizarCompra = () => {
        setVisivel(false)
        navigation.navigate("Home")
        esvaziarCarrinho()
    }

    return (
        <View>
            <View style={estilos.row}>
                <TextInput
                    style={estilos.input}
                    placeholder={"Código Promocional"}
                    keyboardType="text"
                    onChangeText={() => { }}
                    defaultValue=""
                />

                <TouchableOpacity onPress={() => { }} style={estilos.botaoPromocao}>
                    <Text style={estilos.textoBotao}>Aplicar</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Sub-total</Text>
                <Text style={estilos.valor}>R$ {subtotal}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Voucher</Text>
                <Text style={estilos.valor}>- R$ {voucher}</Text>
            </View>

            <View style={estilos.row}>
                <Text style={estilos.label}>Taxa de Entrega</Text>
                <Text style={estilos.valor}>R$ {taxaDeEntrega}</Text>
            </View>

            <View style={estilos.separador} />

            <View style={estilos.row}>
                <Text style={estilos.valor}>Total</Text>
                <Text style={estilos.valor}>R$ {total}</Text>
            </View>

            <TouchableOpacity onPress={() => { setVisivel(true) }} style={estilos.botao}>
                <Text style={estilos.textoBotao}>Finalizar Compra</Text>
            </TouchableOpacity>

            <CompraModal
                visivel={visivel}
                setVisivel={setVisivel}
                label={"Compra finalizada!"}
                botao1={{
                    texto: "Imprimir Nota Fiscal",
                    onPress: () => { }
                }}
                botao2={{
                    texto: "Fechar",
                    onPress: finalizarCompra
                }}

            />
        </View>
    )
}

export default ResumoCompra;

const estilos = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15
    },
    input: {
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 15,
        backgroundColor: "#fff",
        flex: 0.9
    },
    botaoPromocao: {
        backgroundColor: "#FF7A00",
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 100
    },
    textoBotao: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    label: {
        fontSize: 18,
        color: "#7B7B7B"
    },
    valor: {
        fontSize: 18,
        fontWeight: "600"
    },
    separador: {
        borderBottomColor: "#CACACA",
        marginTop: 15,
        borderBottomWidth: 1
    },
    botao: {
        backgroundColor: "#FF7A00",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 190,
        margin: 25,
        padding: 15,
        alignSelf: "center"
    }
})