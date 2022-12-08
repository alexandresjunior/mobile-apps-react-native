import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import celular1 from "../../../assets/celular_1.png";
import imgOferta1 from "../../../assets/oferta_1.png";
import imgOferta2 from "../../../assets/oferta_2.png";
import PromoCard from "../../componentes/cards/PromoCard";
import HorizontalCard from "../../componentes/cards/HorizontalCard";
import Header from "./componentes/Header";
import VerticalCard from "../../componentes/cards/VerticalCard";
import SectionHeader from "../../componentes/headers/SectionHeader";

const Home = () => {
    return (
        <SafeAreaView style={estilos.tela}>
            <Header />

            <HorizontalCard imagem={celular1} />

            <SectionHeader titulo={"Ofertas Incríveis"} link={"Ver Tudo"} />
            <View style={estilos.ofertas}>
                <VerticalCard imagem={imgOferta1} />
                <VerticalCard imagem={imgOferta2} />
            </View>

            <PromoCard />
        </SafeAreaView>
    )
}

export default Home;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    ofertas: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "row"
    }
})