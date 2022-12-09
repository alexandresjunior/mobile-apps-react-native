import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import VerticalCard from "../../../componentes/cards/VerticalCard";
import SectionHeader from "../../../componentes/headers/SectionHeader";
import imgOferta1 from "../../../../assets/oferta_1.png";

const Ofertas = ({ ofertas }) => {
    return (
        <>
            <SectionHeader titulo={"Ofertas Incríveis"} link={"Ver Tudo"} />
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
                            <VerticalCard
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