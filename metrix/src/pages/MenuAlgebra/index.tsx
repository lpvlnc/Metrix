import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import MathJax from 'react-native-mathjax';
import MenuItem from '../../components/MenuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuAlgebraScreenProp = StackNavigationProp<RootStackParamList, 'MenuAlgebra'>;

const MenuAlgebra = () => {
  const navigation = useNavigation<MenuAlgebraScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Algebra"></MainContainerTitle>
      <View style={styles.contentContainer}>
        <MenuItem title="Operações básicas"/>
        <MenuItem title="Polinomiais"/>
        <MenuItem title="Racionais"/>
        <MenuItem title="Segundo grau" onPress={() => navigation.navigate('MenuSecondDegreeEquations')}/>
      </View>
    </View>
  )
}

export default MenuAlgebra

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})