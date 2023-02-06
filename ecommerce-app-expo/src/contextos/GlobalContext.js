import React, { createContext, useEffect, useState } from "react";
import { gerarNovoId, obterItensDoCarrinho, removerLocalmente, salvarLocalmente } from "../local";

export const GlobalContext = createContext({});

export const CarrinhoDeComprasProvider = ({ children }) => {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        obterItensDoCarrinho(setItens);
    }, [])

    const adicionarItemAoCarrinho = async (item) => {
        const id = await gerarNovoId();

        const novoItem = { id: id.toString(), ...item }

        setItens([...itens, novoItem])

        await salvarLocalmente([...itens, novoItem])
    }

    const removerItemDoCarrinho = async (item) => {
        const listaDeItens = itens.filter((elementoDeItens) => elementoDeItens.id !== item.id)

        setItens(listaDeItens)

        await salvarLocalmente(listaDeItens)
    }

    const esvaziarCarrinho = async () => {
        setItens([]);

        await removerLocalmente()
    }

    return (
        <GlobalContext.Provider value={{ itens, adicionarItemAoCarrinho, removerItemDoCarrinho, esvaziarCarrinho }}>
            {children}
        </GlobalContext.Provider>
    )
}