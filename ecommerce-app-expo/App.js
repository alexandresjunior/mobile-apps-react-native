import React from "react";
import { StatusBar } from "expo-status-bar";
import StackRotas from "./src/rotas/StackRotas";
import { NavigationContainer } from "@react-navigation/native";
import { CarrinhoDeComprasProvider } from "./src/contextos/GlobalContext";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <CarrinhoDeComprasProvider>
        <StackRotas />
      </CarrinhoDeComprasProvider>
    </NavigationContainer>
  );
}

