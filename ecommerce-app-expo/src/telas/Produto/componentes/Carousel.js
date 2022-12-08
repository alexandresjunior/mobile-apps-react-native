import React, { useState } from 'react';
import { Dimensions, StyleSheet, Platform, View, ScrollView, Image, Text } from 'react-native';
import modelo1 from "../../../../assets/modelo_1.png";
import modelo2 from "../../../../assets/modelo_2.png";
import modelo3 from "../../../../assets/modelo_3.png";
import modelo4 from "../../../../assets/modelo_4.png";

const imagens = [modelo1, modelo2, modelo3, modelo4];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Carousel = () => {
    // const [imgActive, setImgActive] = useState(0);
    let imgActive = 1;

    const handleOnChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

            // if (slide != imgActive) {
            //     setImgActive(slide);
            // }
        }
    }

    return (
        <View style={estilos.wrap}>
            <ScrollView
                onScroll={({ nativeEvent }) => handleOnChange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={0}
                pagingEnabled
                horizontal
                style={estilos.wrap}
            >
                {
                    imagens.map((imagem, index) => {
                        return (
                            <Image
                                key={index}
                                resizeMode="stretch"
                                style={estilos.wrap}
                                source={imagem}
                            />
                        )
                    })
                }
            </ScrollView>

            <View style={estilos.wrapDot}>
                {imagens.map((imagem, index) => {
                    return (<Text key={index} style={index == imgActive ? estilos.dotActive : estilos.dot}>●</Text>)
                })}
            </View>

        </View>
    )
}

export default Carousel;

const estilos = StyleSheet.create({
    container: {
        flex: 30,
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.40
    },
    wrapDot: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignSelf: "center"
    },
    dot: {
        margin: 5,
        marginBottom: 15,
        color: "#CACACA",
    },
    dotActive: {
        margin: 5,
        marginBottom: 15,
        color: "#FFA959",
    }
})