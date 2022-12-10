import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const InfoProvider = ({ children }) => {
    let [numItens, setNumItens] = useState(0);

    const decrementarNumItens = (event) => {
        event.preventDefault();

        if (numItens > 0) {
            setNumItens(--numItens);
        }
    }

    const incrementarNumItens = (event) => {
        event.preventDefault();

        setNumItens(++numItens);
    }

    return (
        <GlobalContext.Provider value={{ numItens, decrementarNumItens, incrementarNumItens }}>
            {children}
        </GlobalContext.Provider>
    )
}