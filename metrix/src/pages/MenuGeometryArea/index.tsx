import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import MathJax from 'react-native-mathjax';
import MenuItem from '../../components/MenuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuGeometryAreaScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometryArea'>;

const MenuGeometryArea = () => {
  const navigation = useNavigation<MenuGeometryAreaScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Área"></MainContainerTitle>
      <View style={styles.contentContainer}>
        <MenuItem title="Circulo" onPress={() => {navigation.navigate('MenuGeometryAreaCircle')}}/>
        <MenuItem title="Quadrado" onPress={() => {navigation.navigate('MenuGeometryAreaSquare')}}/>
        <MenuItem title="Triângulo" onPress={() => {navigation.navigate('MenuGeometryAreaTriangle')}}/>
      </View>
    </View>
  )
}

export default MenuGeometryArea

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})