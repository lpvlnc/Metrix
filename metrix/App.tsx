import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import Toast from 'react-native-toast-message'
import { COLORS } from './src/constants/colors'

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