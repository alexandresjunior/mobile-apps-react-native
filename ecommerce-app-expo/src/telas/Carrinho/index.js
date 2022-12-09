import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import ResumoCompra from "./componentes/ResumoCompra";

const Carrinho = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={estilos.tela}>
            <FlatList
                style={estilos.lista}
                data={[item]}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return <Header navigation={navigation} />
                }}
                ListFooterComponent={() => {
                    return <ResumoCompra
                        subtotal={"R$ 2.600"}
                        voucher={"R$ 100"}
                        taxa={"R$ 20"}
                        total={"R$ 2.520"}
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