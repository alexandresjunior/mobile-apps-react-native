import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import TelaPrincipal from './src/telas/TelaPrincipal';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <TelaPrincipal />
    </SafeAreaView>
  );
}

