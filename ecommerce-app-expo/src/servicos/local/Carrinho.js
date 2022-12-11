import { db } from "./SQLite"

export function criaTabela() {
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
      "Carrinho " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, tamanho TEXT, preco REAL, quantidade INTEGER);")
  })
}

export async function adicionaItem(item) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO Carrinho (nome, tamanho, preco, quantidade) VALUES (?, ?, ?, ?);",
        [item.nome, item.tamanho, item.preco, item.quantidade],
        () => {
          resolve("Item adicionado com sucesso!")
        })
    })
  })
}

export async function atualizaItem(item) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("UPDATE Carrinho SET nome = ?, tamanho = ?, preco = ?, quantidade = ? WHERE id = ?;",
        [item.nome, item.tamanho, item.preco, item.quantidade, item.id],
        () => {
          resolve("Item atualizado com sucesso!")
        })
    })
  })
}

export async function removeItem(item) {
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

export async function buscaItens() {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Carrinho;",
        [],
        (transaction, resultado) => {
          resolve(resultado.rows._array)
        })
    })
  })
}
