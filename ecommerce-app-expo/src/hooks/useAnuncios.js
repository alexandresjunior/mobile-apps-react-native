import { useState, useEffect } from "react";
import { obterAnuncios } from "../servicos";

export const useAnuncios = () => {
    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        obterAnuncios("/anuncios", setAnuncios);
    }, []);

    return [anuncios, setAnuncios];
}