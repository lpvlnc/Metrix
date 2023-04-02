import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { COLORS } from './src/styles/colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}