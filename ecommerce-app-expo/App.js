import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import SignIn from './src/telas/SignIn';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <SignIn />
    </SafeAreaView>
  );
}

