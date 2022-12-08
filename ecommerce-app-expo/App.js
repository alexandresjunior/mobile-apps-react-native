import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import Produto from './src/telas/Produto';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Produto />
    </SafeAreaView>
  );
}

