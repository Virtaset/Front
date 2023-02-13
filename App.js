import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import ElectricityPrices from './components/ElectricityPrices';
import ElectricityHistory from './components/ElectricityHistory';
import Header from './components/Header';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
        <Header />
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Sähkön hinta') {
              iconName = 'md-flash-outline';
            } else if (route.name === 'Historia') {
              iconName = 'md-book-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Sähkön hinta" component={ElectricityPrices} />
            <Tab.Screen name="Historia" component={ElectricityHistory} />
          </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
  };


