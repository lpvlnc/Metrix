import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import Toast from 'react-native-toast-message'
import { COLORS } from './src/constants/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import About from './src/components/About'

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.primary} barStyle='light-content'/>
        <Routes/>
        {/* <NavBar/> */}
        <Toast/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}