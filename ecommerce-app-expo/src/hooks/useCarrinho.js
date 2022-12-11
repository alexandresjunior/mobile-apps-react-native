import { useState, useEffect } from "react";
import { buscaItens } from "../servicos/local/Carrinho";

export const useCarrinho = () => {
    const [itens, setItens] = useState([])

    useEffect(() => {
        mostraItens()
    }, [])

    async function mostraItens() {
        const resultado = await buscaItens();

        setItens(resultado)
    }

    return [itens, setItens];
}