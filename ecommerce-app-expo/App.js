import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Carrinho from './src/telas/Carrinho';
import SignIn from './src/telas/SignIn';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <SignIn />
    </SafeAreaView>
  );
}

