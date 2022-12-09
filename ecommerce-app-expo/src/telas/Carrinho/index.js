import React, { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";

const Carrinho = ({ route, navigation }) => {
    const { item, tamanho, numItens, setNumItens } = route.params;

    let [subtotal, setSubtotal] = useState(item.preco * numItens);

    const voucher = 100;
    const taxa = 20;
    let total = subtotal - voucher + taxa;

    return (
        <SafeAreaView style={estilos.tela}>
            <FlatList
                style={estilos.lista}
                data={[item]}
                renderItem={({ item }) => <Item item={item} tamanho={tamanho} numItens={numItens} setNumItens={setNumItens} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return <Header navigation={navigation} />
                }}
                ListFooterComponent={() => {
                    return <ResumoCompra
                        subtotal={subtotal}
                        voucher={subtotal === 0 ? 0 : voucher}
                        taxa={taxa}
                        total={total}
                    />
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