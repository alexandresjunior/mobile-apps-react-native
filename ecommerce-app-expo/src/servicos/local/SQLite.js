import * as SQLite from "expo-sqlite";

const abreConexao = () => {
    return SQLite.openDatabase("db.db");
}

export const db = abreConexao();