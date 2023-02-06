import axios from "axios";

const api = axios.create({
    // Link to Postman Mock Server
    baseURL: "https://7a46adff-85b1-4880-887d-5a952916d127.mock.pstmn.io"
    
    // Link to JSON Server (trocar 'localhost' pelo IP da máquina)
    // baseURL: "http://localhost:5000"
});

export const obterAnuncios = async (url, setAnuncios) => {
    await api.get(url)
        .then(resultado => {
            setAnuncios(resultado.data)
        }).catch((erro) => console.error(erro));
}

export const obterOfertas = async (url, setOfertas) => {
    await api.get(url)
        .then(resultado => {
            setOfertas(resultado.data)
        }).catch((erro) => console.error(erro));
}

export const obterProdutos = async (url, setProdutos) => {
    await api.get(url)
        .then(resultado => {
            setProdutos(resultado.data)
        }).catch((erro) => console.error(erro));
}
