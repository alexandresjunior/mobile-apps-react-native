import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const CarrinhoDeComprasProvider = ({ children }) => {
    const [id, setId] = useState(1);
    const [itens, setItens] = useState([]);

    const adicionarItemAoCarrinho = (item) => {
        setItens([...itens, item])

        setId(id + 1)
    }

    const removerItemDoCarrinho = (item) => {
        const listaDeItens = itens.filter((elementoDeItens) => elementoDeItens.id !== item.id)

        setItens(listaDeItens)
    }

    const esvaziarCarrinho = () => {
        setItens([]);
    }

    return (
        <GlobalContext.Provider value={{ id, itens, adicionarItemAoCarrinho, removerItemDoCarrinho, esvaziarCarrinho }}>
            {children}
        </GlobalContext.Provider>
    )
}