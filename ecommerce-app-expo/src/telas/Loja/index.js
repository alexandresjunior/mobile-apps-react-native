import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import cartaoCompras1 from "../../../assets/cartao_compras_icon_1.png";
import cartaoCompras2 from "../../../assets/cartao_compras_icon_2.png";
import cartaoCompras3 from "../../../assets/cartao_compras_icon_3.png";
import cartaoCompras4 from "../../../assets/cartao_compras_icon_4.png";
import CartaoMiniatura from "../../componentes/cartoes/CartaoMiniatura";
import CabecalhoSecao from "../../componentes/cabecalhos/CabecalhoSecao";
import CabecalhoLoja from "./componentes/CabecalhoLoja";
import ItensRecomendados from "./componentes/ItensRecomendados";
import { useProdutos } from "../../hooks/useProdutos";

const Loja = () => {
    const [produtos] = useProdutos();

    return (
        <SafeAreaView style={estilos.tela}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CabecalhoLoja />
                <CabecalhoSecao titulo={"Comprar por Categoria"} link={"Ver Tudo"} />
                <View style={estilos.categorias}>
                    <CartaoMiniatura imagem={cartaoCompras1} legenda={"Popular"} />
                    <CartaoMiniatura imagem={cartaoCompras2} legenda={"Homem"} />
                    <CartaoMiniatura imagem={cartaoCompras3} legenda={"Mulher"} />
                    <CartaoMiniatura imagem={cartaoCompras4} legenda={"Crianças"} />
                </View>
                <ItensRecomendados produtos={produtos} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Loja;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    compras: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    textoBotaoVerTudo: {
        marginTop: 8,
        textAlign: "center",
        color: "#FF7A00",
    },
    categorias: {
        marginTop: 20,
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})