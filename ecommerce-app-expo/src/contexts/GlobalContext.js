import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const InfoProvider = ({ children }) => {
    const [id, setId] = useState(1);
    const [itens, setItens] = useState([]);

    const adicionarItem = (item, novo) => {
        setItens([...itens, item])

        novo && setId(id + 1)
    }

    const removerItem = (item) => {
        const lista = itens.filter((_, index) => index !== item.id);
        setItens(lista);
    }

    const atualizarItem = (item) => {
        removerItem(item);
        adicionarItem(item, false);
    }

    return (
        <GlobalContext.Provider value={{ id, itens, adicionarItem, removerItem, atualizarItem }}>
            {children}
        </GlobalContext.Provider>
    )
}