import React from "react";
import { StatusBar } from "expo-status-bar";
import StackRotas from "./src/rotas/StackRotas";
import { NavigationContainer } from "@react-navigation/native";
import { InfoProvider } from "./src/contexts/GlobalContext";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <InfoProvider>
        <StackRotas />
      </InfoProvider>
    </NavigationContainer>
  );
}

