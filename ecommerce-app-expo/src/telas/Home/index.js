import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PromoCard from "../../componentes/cards/PromoCard";
import Header from "./componentes/Header";
import { obterAnuncios, obterOfertas } from "../../servicos";
import Anuncios from "./componentes/Anuncios";
import Ofertas from "./componentes/Ofertas";

const Home = () => {
    const [anuncios, setAnuncios] = useState([]);
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        obterAnuncios("/anuncios", setAnuncios);
        obterOfertas("/ofertas", setOfertas);
    }, []);

    return (
        <SafeAreaView style={estilos.tela}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Anuncios anuncios={anuncios} />
                <Ofertas ofertas={ofertas} />
                <PromoCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    }
})