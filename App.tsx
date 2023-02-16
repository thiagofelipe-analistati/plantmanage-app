import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserIdentification } from './src/pages/UserIdentification';
import { Welcome } from './src/pages/Welcome';

export default function App() {
  return (
    <UserIdentification />
  );
}
