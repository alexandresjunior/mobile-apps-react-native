import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Carrinho from './src/telas/Carrinho';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Carrinho />
    </SafeAreaView>
  );
}

