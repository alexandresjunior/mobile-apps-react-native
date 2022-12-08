import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./componentes/Header";
import Item from "./componentes/Item";
import modelo1 from "../../../assets/modelo_1.png";
import ResumoCompra from "./componentes/ResumoCompra";

const Carrinho = () => {
    return (
        <View style={estilos.tela}>
            <Header />

            <Item imagem={modelo1} />
            <Item imagem={modelo1} />
            <Item imagem={modelo1} />

            <ResumoCompra
                subtotal={"R$ 2.600"}
                voucher={"R$ 100"}
                taxa={"R$ 20"}
                total={"R$ 2.520"}
            />
        </View>
    )
}

export default Carrinho;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    }
})