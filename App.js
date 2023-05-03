import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomePage from './src/pages/HomePage';
import Calculator from './src/pages/Calculator';
import Header from './src/components/Header';


export default function App() {

  // Generates the bottom tab navigator
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Hinta nyt') {
            iconName = 'md-flash-outline';
          } else if (route.name === 'Laskuri') {
            iconName = 'md-calculator-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Styling for the bottom tab navigator
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Hinta nyt" component={HomePage} />
        <Tab.Screen name="Laskuri" component={Calculator} />
      </Tab.Navigator>
      {/* What is StatusBar for?  */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};


