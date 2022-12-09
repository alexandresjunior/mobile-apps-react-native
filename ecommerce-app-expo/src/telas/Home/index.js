import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
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
            <Header />
            <Anuncios anuncios={anuncios} />
            <Ofertas ofertas={ofertas} />
            <PromoCard />
        </SafeAreaView>
    )
}

export default Home;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    }
})