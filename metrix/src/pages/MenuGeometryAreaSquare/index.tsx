import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuGeometryAreaSquareScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometryAreaSquare'>;

const MenuGeometryAreaSquare = () => {
  const navigation = useNavigation<MenuGeometryAreaSquareScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Área do quadrado"></MainContainerTitle>
      <View style={styles.contentContainer}>
      </View>
    </View>
  )
}

export default MenuGeometryAreaSquare

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})