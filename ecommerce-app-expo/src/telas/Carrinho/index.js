import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { obterItensDoCarrinho } from "../../servicos/local/Carrinho";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";

const Carrinho = ({ navigation }) => {
    const [item, setItem] = useState([]);

    const obterDados = async () => {
        const resultado = await obterItensDoCarrinho();

        setItem(resultado);
    }

    useEffect(() => {
        obterDados();
    }, []);

    return (
        <SafeAreaView style={estilos.tela}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={estilos.lista}
                data={item}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return <Header navigation={navigation} />
                }}
                ListFooterComponent={() => {
                    return <ResumoCompra item={item} navigation={navigation} />
                }}
            />
        </SafeAreaView>
    )
}

export default Carrinho;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    }
})