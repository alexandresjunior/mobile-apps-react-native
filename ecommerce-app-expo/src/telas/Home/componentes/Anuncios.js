import React from "react";
import { ScrollView } from "react-native";
import CartaoHorizontal from "../../../componentes/cartoes/CartaoHorizontal";
import imagem from "../../../../assets/celular_1.png";

const Anuncios = ({ anuncios }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={0}
            pagingEnabled
            horizontal
        >
            {
                anuncios?.map((anuncio, index) => {
                    return (
                        <CartaoHorizontal
                            titulo={anuncio.titulo}
                            texto={anuncio.texto}
                            imagem={imagem}
                            key={index}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default Anuncios;