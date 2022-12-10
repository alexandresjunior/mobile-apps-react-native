import { useState, useEffect } from "react";
import { obterProdutos } from "../servicos";

export const useProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        obterProdutos("/produtos", setProdutos);
    }, []);

    return [produtos, setProdutos];
}