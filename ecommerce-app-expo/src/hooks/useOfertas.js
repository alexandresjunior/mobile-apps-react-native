import { useState, useEffect } from "react";
import { obterOfertas } from "../servicos";

export const useOfertas = () => {
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        obterOfertas("/ofertas", setOfertas);
    }, []);

    return [ofertas, setOfertas];
}