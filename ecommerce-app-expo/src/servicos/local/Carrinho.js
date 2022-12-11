import { db } from "./SQLite";

export const criaTabelaCarrinho = () => {
    db.transaction((transaction) => {
        transaction.executeSql(
            "CREATE TABLE IF NOT EXISTS " +
            "Carrinho " +
            "(id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT, nomeItem TEXT, tamanho TEXT, precoUnitario REAL, quantidade INTEGER);");
    })
}

/* Operações CRUD */

export const adicionarItemNoCarrinho = (item) => {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                "INSERT INTO Carrinho (nomeItem, tamanho, precoUnitario, quantidade) VALUES (?, ?, ?, ?);",
                [item.nome, item.tamanho, item.precoUnitario, item.quantidade],
                () => {
                    resolve("Item adicionado com sucesso!")
                },
                () => {
                    resolve("Erro ao adicionar item no carrinho!")
                }
            )
        })
    })
}

export const obterItensDoCarrinho = () => {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Carrinho;",
                [],
                (_, resultado) => {
                    resolve(resultado.rows._array)
                },
                () => {
                    resolve("Erro ao adicionar item no carrinho!")
                }
            )
        })
    })
}

export const atualizaItemDoCarrinho = (item) => {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE Carrinho SET nomeItem = ?, tamanho = ?, quantidade = ? WHERE id = ?;",
                [item.nomeItem, item.tamanho, item.quantidade, item.id],
                () => {
                    resolve("Item atualizado com sucesso!")
                })
        })
    })
}

export const removerItemDoCarrinho = (item) => {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("DELETE FROM Carrinho WHERE id = ?;",
                [item.id],
                () => {
                    resolve("Item removido com sucesso!")
                })
        })
    })
}

export const deletarCarrinho = () => {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("DROP TABLE IF EXISTS Carrinho;",
                [],
                () => {
                    resolve("Tabela removida com sucesso!")
                })
        })
    })
}

export const limparCarrinho = () => {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("DELETE FROM Carrinho;",
                [],
                () => {
                    resolve("Todos os itens foram removidos do carrinho com sucesso!")
                },
                () => {
                    resolve("Erro ao remover os itens carrinho!")
                })
        })
    })
}