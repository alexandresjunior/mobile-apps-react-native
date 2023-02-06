import React, { useContext, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Carrossel from "./componentes/Carrossel";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import modelo1 from "../../../assets/modelo_1.png";
import modelo2 from "../../../assets/modelo_2.png";
import modelo3 from "../../../assets/modelo_3.png";
import modelo4 from "../../../assets/modelo_4.png";
import BotaoTamanho from "./componentes/BotaoTamanho";
import { GlobalContext } from "../../contextos/GlobalContext";
import CompraModal from "../../componentes/CompraModal";
import CabecalhoProduto from "./componentes/CabecalhoProduto";

const imagens = [modelo1, modelo2, modelo3, modelo4];

const Produto = ({ route }) => {
    const produto = route.params;

    const { adicionarItemAoCarrinho } = useContext(GlobalContext);

    const [tamanho, setTamanho] = useState("P");
    const [numItens, setNumItens] = useState(1);
    const [imagemAtiva, setImagemAtiva] = useState(0);

    const item = {
        produto: produto,
        tamanho: tamanho,
        quantidade: numItens
    }

    const [visivel, setVisivel] = useState(false);

    return (
        <SafeAreaView>
            <CabecalhoProduto />

            <Carrossel
                imagens={imagens}
                imagemAtiva={imagemAtiva}
                setImagemAtiva={setImagemAtiva}
            />

            <View style={estilos.tela}>
                <View style={estilos.row}>
                    {
                        imagens.map((imagem, index) => {
                            return (
                                <TouchableOpacity onPress={() => { }} key={index}>
                                    <Image
                                        source={imagem}
                                        style={(index === imagemAtiva) ? [estilos.miniatura, estilos.miniaturaAtiva] : estilos.miniatura}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

                <View style={estilos.review}>
                    <AntDesignIcon name="star" size={20} color={"#FDCC0D"} />
                    <Text style={estilos.nota}>4.9</Text>
                    <Text style={estilos.quantidadeReviews}>(85 Reviews)</Text>
                </View>

                <Text style={{ fontSize: 16, marginTop: 10 }}>Camisa de Algodão Regular Fit (Masculina)</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>R$ 100</Text>

                <Text style={{ fontSize: 16, marginTop: 15 }}>Selecionar Tamanho:</Text>

                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <BotaoTamanho label={"P"} tamanho={tamanho} setTamanho={setTamanho} />
                    <BotaoTamanho label={"M"} tamanho={tamanho} setTamanho={setTamanho} />
                    <BotaoTamanho label={"G"} tamanho={tamanho} setTamanho={setTamanho} />
                    <BotaoTamanho label={"GG"} tamanho={tamanho} setTamanho={setTamanho} />
                </View>

                <View style={[estilos.row, { alignItems: "center", marginTop: 25 }]}>
                    <View style={estilos.quantidadeItem}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (numItens > 1) {
                                        setNumItens(numItens - 1)
                                    }
                                }}
                                style={estilos.botaoNumItens}
                            >
                                <AntDesignIcon name="minus" size={15} color={"#000"} />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{numItens}</Text>

                            <TouchableOpacity
                                onPress={() => { setNumItens(numItens + 1) }}
                                style={estilos.botaoNumItens}
                            >
                                <AntDesignIcon name="plus" size={15} color={"#000"} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            adicionarItemAoCarrinho(item)
                            setVisivel(true)
                        }}
                        style={estilos.botaoCarrinho}>
                        <Text style={estilos.textoBotaoCarrinho}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CompraModal
                visivel={visivel}
                setVisivel={setVisivel}
                texto={"Item adicionado ao carrinho!"}
                botao={{
                    texto: "Adicionar novo item",
                    link: "Loja"
                }}
            />
        </SafeAreaView>
    )
}

export default Produto;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    botao: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 15
    },
    miniatura: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#CACACA",
        width: 80,
        height: 80,
        marginBottom: 15
    },
    miniaturaAtiva: {
        borderColor: "#FFA959",
    },
    review: {
        flexDirection: "row",
        alignItems: "center"
    },
    nota: {
        fontSize: 18,
        fontWeight: "bold",
        marginStart: 5
    },
    quantidadeReviews: {
        marginStart: 5,
        color: "#CACACA"
    },
    quantidadeItem: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#D9D9D9"
    },
    botaoNumItens: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        padding: 10
    },
    botaoCarrinho: {
        backgroundColor: "#FF7A00",
        padding: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 180,
    },
    textoBotaoCarrinho: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    }
})