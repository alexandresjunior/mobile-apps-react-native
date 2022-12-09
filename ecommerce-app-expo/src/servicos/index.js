import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/"
});

export const obterAnuncios = async (url, setAnuncios) => {
    const resultado = await api.get(url);

    setAnuncios(resultado.data);
}

export const obterOfertas = async (url, setOfertas) => {
    const resultado = await api.get(url);

    setOfertas(resultado.data);
}

export const obterProdutos = async (url, setProdutos) => {
    const resultado = await api.get(url);

    setProdutos(resultado.data);
}
