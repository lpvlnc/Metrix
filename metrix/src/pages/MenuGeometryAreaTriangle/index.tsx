import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuGeometryAreaTriangleScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometryAreaTriangle'>;

const MenuGeometryAreaTriangle = () => {
  const navigation = useNavigation<MenuGeometryAreaTriangleScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Área do triângulo"></MainContainerTitle>
      <View style={styles.contentContainer}>
      </View>
    </View>
  )
}

export default MenuGeometryAreaTriangle

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})