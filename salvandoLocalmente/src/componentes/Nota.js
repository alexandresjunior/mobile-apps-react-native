import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Nota({item, setNotaSelecionada}) {
  const categorias = {Pessoal: "#FF924F", Outros: "#00911F", Trabalho: "#2F71EB"}
  const estilos = styleFunction(categorias[item.categoria])
  
  return (
    <TouchableOpacity style={estilos.cartao} onPress={() => setNotaSelecionada(item)}>
      <Text style={estilos.titulo}>{item.titulo}</Text>
      <Text style={estilos.categoria}>{item.categoria}</Text>
      <Text style={estilos.texto} numberOfLines={5}>{item.texto}</Text>
    </TouchableOpacity>
  )
}

const styleFunction = (cor) => StyleSheet.create({
  cartao: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderTopWidth: 5,
    borderColor: cor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  categoria: {
    borderRadius: 4,
    backgroundColor: cor,
    padding: 4,
    color: "#FAFAFA",
    alignSelf: "flex-start",
  },
  texto: {
    lineHeight: 28,
  }
})
