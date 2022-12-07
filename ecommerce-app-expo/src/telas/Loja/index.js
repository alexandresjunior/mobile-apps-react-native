import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import cartaoCompras1 from "../../../assets/cartao_compras_icon_1.png";
import cartaoCompras2 from "../../../assets/cartao_compras_icon_2.png";
import cartaoCompras3 from "../../../assets/cartao_compras_icon_3.png";
import cartaoCompras4 from "../../../assets/cartao_compras_icon_4.png";
import modelo1 from "../../../assets/modelo_1.png";

const Loja = () => {
    return (
        <View style={estilos.tela}>
            <View style={estilos.cabecalho}>
                <View style={estilos.barraDeBusca}>
                    <Text style={estilos.textoBarraDeBusca}>Faça sua busca aqui</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <IoniconsIcon name="search" size={20} color="#D9D9D9" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={estilos.carrinhoCompras} onPress={() => { }}>
                    <IoniconsIcon name="cart-outline" size={30} color="#000000" />
                </TouchableOpacity>
            </View>

            <View style={estilos.compras}>
                <Text style={estilos.titulo}>Comprar por Categoria</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={estilos.textoBotaoVerTudo}>Ver Tudo</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.ofertas}>
                <TouchableOpacity style={estilos.cartaoOfertas} onPress={() => { }}>
                    <Image source={cartaoCompras1} style={estilos.imagemCartaoCompras} />
                    <Text>Popular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.cartaoOfertas} onPress={() => { }}>
                    <Image source={cartaoCompras2} style={estilos.imagemCartaoCompras} />
                    <Text>Homem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.cartaoOfertas} onPress={() => { }}>
                    <Image source={cartaoCompras3} style={estilos.imagemCartaoCompras} />
                    <Text>Mulher</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.cartaoOfertas} onPress={() => { }}>
                    <Image source={cartaoCompras4} style={estilos.imagemCartaoCompras} />
                    <Text>Crianças</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.compras}>
                <Text style={estilos.titulo}>Itens Recomendados</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={estilos.textoBotaoVerTudo}>Ver Tudo</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.recomendacoes}>
                <TouchableOpacity style={estilos.item} onPress={() => { }}>
                    <View style={estilos.itemTopo}>
                        <Image source={modelo1} style={estilos.imagemItem} />
                    </View>
                    <View style={estilos.itemRodape}>
                        <Text>Camisa Regular Fit</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={estilos.preco}>R$ 100,00</Text>
                            <TouchableOpacity style={{ padding: 5 }} onPress={() => { }}>
                                <SimpleLineIconsIcon name="handbag" size={20} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.item} onPress={() => { }}>
                    <View style={estilos.itemTopo}>
                        <Image source={modelo1} style={estilos.imagemItem} />
                    </View>
                    <View style={estilos.itemRodape}>
                        <Text>Camisa Regular Fit</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={estilos.preco}>R$ 100,00</Text>
                            <TouchableOpacity style={{ padding: 5 }} onPress={() => { }}>
                                <SimpleLineIconsIcon name="handbag" size={20} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={estilos.recomendacoes}>
                <TouchableOpacity style={estilos.item} onPress={() => { }}>
                    <View style={estilos.itemTopo}>
                        <Image source={modelo1} style={estilos.imagemItem} />
                    </View>
                    <View style={estilos.itemRodape}>
                        <Text>Camisa Regular Fit</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={estilos.preco}>R$ 100,00</Text>
                            <TouchableOpacity style={{ padding: 5 }} onPress={() => { }}>
                                <SimpleLineIconsIcon name="handbag" size={20} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.item} onPress={() => { }}>
                    <View style={estilos.itemTopo}>
                        <Image source={modelo1} style={estilos.imagemItem} />
                    </View>
                    <View style={estilos.itemRodape}>
                        <Text>Camisa Regular Fit</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={estilos.preco}>R$ 100,00</Text>
                            <TouchableOpacity style={{ padding: 5 }} onPress={() => { }}>
                                <SimpleLineIconsIcon name="handbag" size={20} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Loja;

const estilos = StyleSheet.create({
    tela: {
        margin: 25
    },
    barraDeBusca: {
        width: 315,
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
    carrinhoCompras: {
        justifyContent: "center"
    },
    textoBarraDeBusca: {
        color: "#CACACA"
    },
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    compras: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    textoBotaoVerTudo: {
        marginTop: 8,
        textAlign: "center",
        color: "#FF7A00",
    },
    ofertas: {
        marginTop: 20,
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cartaoOfertas: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959"
    },
    imagemCartaoCompras: {
        width: 50,
        height: 50,
        marginBottom: 15
    },
    recomendacoes: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    item: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    itemTopo: {

    },
    itemRodape: {
        padding: 15,
    },
    imagemItem: {
        width: 170,
        height: 170
    },
    preco: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    }
})