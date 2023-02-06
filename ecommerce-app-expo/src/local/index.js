import AsyncStorage from "@react-native-async-storage/async-storage"

/**
 * O AsyncStorage só consegue guardar strings como chave e valor, 
 * mas existe uma maneira de guardar objetos contendo mais informações. 
 * 
 * Podemos transformar um objeto JSON em uma string e guardá-la no AsyncStorage
 * através da função JSON.stringify(), que transforma nosso objeto em uma string. 
 * 
 * Para recuperar a informação, podemos receber seu conteúdo e 
 * depois transformar novamente em um objeto JSON, usando a função JSON.parse().
 */

export const gerarNovoId = async () => {
    const carrinho = await AsyncStorage.getItem("carrinho")

    const itens = JSON.parse(carrinho)

    if (!itens) {
        return 1
    }

    return itens.length + 1
}

export const salvarLocalmente = async (itens) => {
    try {
        await AsyncStorage.setItem("carrinho", JSON.stringify(itens))
    } catch (error) {
        console.error(error)
    }
}

export const removerLocalmente = async () => {
    try {
        await AsyncStorage.removeItem("carrinho")
    } catch (error) {
        console.error(error)
    }
}

export const obterItensDoCarrinho = async (setItens) => {
    const itens = await AsyncStorage.getItem("carrinho")

    if (!!itens) {
        setItens(JSON.parse(itens))
    }
}