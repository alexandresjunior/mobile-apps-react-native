import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PromoCard from "../../componentes/cards/PromoCard";
import Header from "./componentes/Header";
import Anuncios from "./componentes/Anuncios";
import Ofertas from "./componentes/Ofertas";
import { useAnuncios } from "../../hooks/useAnuncios";
import { useOfertas } from "../../hooks/useOfertas";

const Home = () => {
    const [anuncios] = useAnuncios();
    const [ofertas] = useOfertas();

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