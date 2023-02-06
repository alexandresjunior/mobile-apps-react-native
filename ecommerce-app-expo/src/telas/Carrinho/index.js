import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { GlobalContext } from "../../contextos/GlobalContext";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";

const Carrinho = () => {
    const { itens } = useContext(GlobalContext);

    return (
        <SafeAreaView style={estilos.tela}>
            <FlatList
                style={estilos.lista}
                data={itens}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return <Header />
                }}
                ListFooterComponent={() => {
                    return <ResumoCompra />
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