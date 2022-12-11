import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useCarrinho } from "../../hooks/useCarrinho";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";

const Carrinho = ({ navigation }) => {
    const [itens, setItens] = useCarrinho();

    console.log(itens)

    return (
        <SafeAreaView style={estilos.tela}>
            <FlatList
                style={estilos.lista}
                data={itens}
                renderItem={(item) => <Item {...item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return <Header navigation={navigation} />
                }}
                ListFooterComponent={() => {
                    return <ResumoCompra item={itens} />
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