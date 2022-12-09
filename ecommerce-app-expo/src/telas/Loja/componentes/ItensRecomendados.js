import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import ShopCard from "../../../componentes/cards/ShopCard";
import modelo1 from "../../../../assets/modelo_1.png";
import { useNavigation } from "@react-navigation/native";
import SectionHeader from "../../../componentes/headers/SectionHeader";

const ItensRecomendados = ({ produtos }) => {
    const navigation = useNavigation();

    return (
        <>
            <SectionHeader titulo={"Itens Recomendados"} link={"Ver Tudo"} />
            <ScrollView
                contentContainerStyle={estilos.container}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={0}
                pagingEnabled
            >
                {
                    produtos?.map((produto, index) => {
                        return (
                            <ShopCard
                                imagem={modelo1}
                                produto={produto}
                                navigation={navigation}
                                key={index}
                                style={estilos.card}
                            />
                        )
                    })
                }
            </ScrollView>
        </>
    )
}

export default ItensRecomendados;

const estilos = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 15
    },
    card: {
        width: "50%"
    }
})