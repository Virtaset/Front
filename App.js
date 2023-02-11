import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { View } from 'react-native';
import ElectricityPrices from './components/ElectricityPrices';
import Header from './components/Header';


export default function App() {
  return (
    <View>
      <Header />
      <ElectricityPrices />
      <StatusBar style="auto" />
    </View>
  );
  }


