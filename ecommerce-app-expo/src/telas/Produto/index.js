import React, { useContext, useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Carousel from "./componentes/Carousel";
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { GlobalContext } from "../../contexts/GlobalContext";

const Produto = ({ route }) => {
    const produto = route.params;

    const { id, adicionarItem } = useContext(GlobalContext);

    const [numItens, setNumItens] = useState(1);
    const [tamanho, setTamanho] = useState("P");

    const item = {
        id: id,
        produto: produto,
        quantidade: numItens,
        tamanho: tamanho
    }

    const decrementarNumItens = (event) => {
        event.preventDefault();
        numItens > 1 && setNumItens(numItens - 1);
    }

    const incrementarNumItens = (event) => {
        event.preventDefault();
        setNumItens(numItens + 1);
    }

    return (
        <SafeAreaView>
            <Carousel />
            <View style={estilos.tela}>
                <View style={estilos.secao}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={modelo1} style={estilos.modelo} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image source={modelo2} style={estilos.modelo} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image source={modelo3} style={estilos.modelo} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image source={modelo4} style={estilos.modelo} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesignIcon name="star" size={20} color="#FDCC0D" />
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginStart: 5 }}>{produto.nota}</Text>
                    <Text style={{ color: "#CACACA", marginStart: 5 }}>(85 Reviews)</Text>
                </View>

                <Text style={{ fontSize: 16, marginTop: 10 }}>{produto.nome}</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>R$ {produto.preco}</Text>

                <Text style={{ fontSize: 16, marginTop: 15 }}>Selecionar Tamanho:</Text>

                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <TouchableOpacity
                        style={
                            [
                                estilos.botaoTamanho,
                                { marginEnd: 10 },
                                tamanho === 'P' && estilos.botaoSelecionado
                            ]
                        }
                        onPress={() => setTamanho("P")}>
                        <Text style={{ fontSize: 16 }}>P</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={
                            [
                                estilos.botaoTamanho,
                                { marginHorizontal: 10 },
                                tamanho === 'M' && estilos.botaoSelecionado
                            ]
                        }
                        onPress={() => setTamanho("M")}>
                        <Text style={{ fontSize: 16 }}>M</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={
                            [
                                estilos.botaoTamanho,
                                { marginHorizontal: 10 },
                                tamanho === 'G' && estilos.botaoSelecionado
                            ]
                        }
                        onPress={() => setTamanho("G")}>
                        <Text style={{ fontSize: 16 }}>G</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={
                            [
                                estilos.botaoTamanho,
                                { marginHorizontal: 10 },
                                tamanho === 'GG' && estilos.botaoSelecionado
                            ]
                        }
                        onPress={() => setTamanho("GG")}>
                        <Text style={{ fontSize: 16 }}>GG</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginTop: 25 }}>
                    <View style={estilos.botao}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <TouchableOpacity
                                style={[estilos.botaoNumItens, { marginHorizontal: 10 }]}
                                onPress={decrementarNumItens}
                            >
                                <AntDesignIcon name="minus" size={15} color="#000000" />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{numItens}</Text>

                            <TouchableOpacity
                                style={[estilos.botaoNumItens, { marginHorizontal: 10 }]}
                                onPress={incrementarNumItens}
                            >
                                <AntDesignIcon name="plus" size={15} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={estilos.botaoAddCarrinho} onPress={() => adicionarItem(item, true)}>
                        <Text style={estilos.textoBotaoAddCarrinho}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Produto;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    secao: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    modelo: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FFA959",
        width: 80,
        height: 80,
        marginBottom: 15
    },
    botao: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#D9D9D9"
    },
    botaoTamanho: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 20
    },
    botaoNumItens: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    botaoAddCarrinho: {
        backgroundColor: "#FF7A00",
        padding: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 180,
        marginStart: 20
    },
    textoBotaoAddCarrinho: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    botaoSelecionado: {
        backgroundColor: "#FFA959",
        borderColor: "#FFA959"
    }
})
