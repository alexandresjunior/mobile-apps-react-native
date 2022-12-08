import React from "react";
import { StyleSheet, View } from "react-native";
import cartaoCompras1 from "../../../assets/cartao_compras_icon_1.png";
import cartaoCompras2 from "../../../assets/cartao_compras_icon_2.png";
import cartaoCompras3 from "../../../assets/cartao_compras_icon_3.png";
import cartaoCompras4 from "../../../assets/cartao_compras_icon_4.png";
import modelo1 from "../../../assets/modelo_1.png";
import MiniCard from "../../componentes/cards/MiniCard";
import ShopCard from "../../componentes/cards/ShopCard";
import SectionHeader from "../../componentes/headers/SectionHeader";
import Header from "./componentes/Header";

const Loja = () => {
    return (
        <View style={estilos.tela}>
            <Header />

            <SectionHeader titulo={"Comprar por Categoria"} link={"Ver Tudo"} />
            <View style={estilos.ofertas}>
                <MiniCard imagem={cartaoCompras1} legenda={"Popular"} />
                <MiniCard imagem={cartaoCompras2} legenda={"Homem"} />
                <MiniCard imagem={cartaoCompras3} legenda={"Mulher"} />
                <MiniCard imagem={cartaoCompras4} legenda={"Crianças"} />
            </View>

            <SectionHeader titulo={"Itens Recomendados"} link={"Ver Tudo"} />
            <View style={estilos.recomendacoes}>
                <ShopCard imagem={modelo1} produto={{ nome: "Camisa Regular Fit", preco: "R$ 100,00" }} />
                <ShopCard imagem={modelo1} produto={{ nome: "Camisa Regular Fit", preco: "R$ 100,00" }} />
            </View>

            <View style={estilos.recomendacoes}>
                <ShopCard imagem={modelo1} produto={{ nome: "Camisa Regular Fit", preco: "R$ 100,00" }} />
                <ShopCard imagem={modelo1} produto={{ nome: "Camisa Regular Fit", preco: "R$ 100,00" }} />
            </View>
        </View>
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
    ofertas: {
        marginTop: 20,
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    recomendacoes: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})