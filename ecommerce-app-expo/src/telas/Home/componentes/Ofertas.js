import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import CartaoVertical from "../../../componentes/cartoes/CartaoVertical";
import CabecalhoSecao from "../../../componentes/cabecalhos/CabecalhoSecao";
import imgOferta1 from "../../../../assets/oferta_1.png";

const Ofertas = ({ ofertas }) => {
    return (
        <>
            <CabecalhoSecao titulo={"Ofertas Incríveis"} link={"Ver Tudo"} />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={0}
                pagingEnabled
                horizontal
                style={estilos.ofertas}
            >
                {
                    ofertas?.map((oferta, index) => {
                        return (
                            <CartaoVertical
                                imagem={imgOferta1}
                                key={index}
                            />
                        )
                    })
                }
            </ScrollView>
        </>
    )
}

export default Ofertas;

const estilos = StyleSheet.create({
    ofertas: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "row"
    }
})