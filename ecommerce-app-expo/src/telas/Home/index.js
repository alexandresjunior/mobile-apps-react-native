import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CartaoPromocao from "../../componentes/cartoes/CartaoPromocao";
import CabecalhoHome from "./componentes/CabecalhoHome";
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
                <CabecalhoHome />
                <Anuncios anuncios={anuncios} />
                <Ofertas ofertas={ofertas} />
                <CartaoPromocao />
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