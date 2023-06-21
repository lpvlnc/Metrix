import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import MathJax from 'react-native-mathjax';
import MenuItem from '../../components/MenuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuGeometryCircumferenceCircleScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometryCircumferenceCircle'>;

const MenuGeometryCircumferenceCircle = () => {
  const navigation = useNavigation<MenuGeometryCircumferenceCircleScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Circunferência"></MainContainerTitle>
      <View style={styles.contentContainer}>
      </View>
    </View>
  )
}

export default MenuGeometryCircumferenceCircle

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})