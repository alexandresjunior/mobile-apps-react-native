import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import usuarioIcone from "../../assets/usuario_icone.png";
import imgCelular1 from "../../assets/celular_1.png";
import imgOferta1 from "../../assets/oferta_1.png";
import imgOferta2 from "../../assets/oferta_2.png";
import ctaImagem from "../../assets/cta_imagem.png";

const Home = () => {
    return (
        <View style={estilos.tela}>
            <View style={estilos.cabecalho}>
                <View>
                    <Text>Bem vindo,</Text>
                    <Text style={estilos.titulo}>Alexandre de Souza Jr.</Text>
                </View>
                <Image source={usuarioIcone} style={estilos.usuarioIcone} />
            </View>

            <View style={estilos.cartao}>
                <View>
                    <Text style={estilos.titulo}>Troque e Economize</Text>
                    <View style={estilos.descricaoCartao}>
                        <Text>Desfrute de uma ótima {"\n"}economia na sua compras</Text>
                    </View>

                    <TouchableOpacity style={estilos.botaoSaibaMais} onPress={() => { }}>
                        <Text style={estilos.textoBotaoSaibaMais}>Saiba Mais</Text>
                    </TouchableOpacity>
                </View>
                <Image source={imgCelular1} style={estilos.imagemCartao} />
            </View>

            <View style={estilos.cabecalho}>
                <Text style={estilos.titulo}>Ofertas Incríveis</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={estilos.textoBotaoVerTudo}>Ver Tudo</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.ofertas}>
                <TouchableOpacity onPress={() => { }}>
                    <Image source={imgOferta1} style={estilos.imagemOfertas} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Image source={imgOferta2} style={estilos.imagemOfertas} />
                </TouchableOpacity>
            </View>

            <View style={estilos.cta}>
                <View>
                    <Text style={estilos.tituloCta}>Obtenha R$ 100 OFF</Text>
                    <View style={estilos.descricaoCartao}>
                        <Text>Gaste no mínimo R$ 100{"\n"}para obter entrega gratuita{"\n"}e voucher promocional para{"\n"}sua próxima compra.</Text>
                    </View>

                    <TouchableOpacity style={estilos.botaoComprar} onPress={() => { }}>
                        <Text style={estilos.textoBotaoComprar}>Comprar</Text>
                    </TouchableOpacity>
                </View>
                <Image source={ctaImagem} style={estilos.imagemCta} />
            </View>
        </View>
    )
}

export default Home;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    usuarioIcone: {
        width: 50,
        height: 50
    },
    textoBotaoVerTudo: {
        marginTop: 10,
        textAlign: "center",
        color: "#FF7A00",
    },
    cartao: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20,
        justifyContent: "space-between",
    },
    imagemCartao: {
        marginTop: 5,
        width: 120,
        height: 120
    },
    descricaoCartao: {
        marginTop: 10
    },
    botaoSaibaMais: {
        backgroundColor: "#FFA959",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        width: 120,
        marginTop: 15
    },
    textoBotaoSaibaMais: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold"
    },
    ofertas: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "row"
    },
    imagemOfertas: {
        marginStart: -10,
        width: 220,
        height: 220,
        borderRadius: 20
    },
    tituloCta: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold"
    },
    cta: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#FFA959",
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20,
        justifyContent: "space-between",
    },
    imagemCta: {
        marginTop: 15,
        width: 120,
        height: 120
    },
    botaoComprar: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        width: 120,
        marginTop: 15
    },
    textoBotaoComprar: {
        textAlign: "center",
        fontWeight: "bold"
    },
})