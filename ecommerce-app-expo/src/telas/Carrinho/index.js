import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";

const Carrinho = ({ route, navigation }) => {
    const { item, tamanho } = route.params;

    return (
        <SafeAreaView style={estilos.tela}>
            <FlatList
                style={estilos.lista}
                data={[item]}
                renderItem={({ item }) => <Item item={item} tamanho={tamanho} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return <Header navigation={navigation} />
                }}
                ListFooterComponent={() => {
                    return <ResumoCompra item={item} />
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