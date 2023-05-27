import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import NavBar from './src/components/Navbar'
import { COLORS } from './src/styles/colors';
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle='light-content'/>
      <Routes/>
      {/* <NavBar/> */}
      <Toast/>
    </NavigationContainer>
  );
}