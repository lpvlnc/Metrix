import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import MathJax from 'react-native-mathjax';
import MenuItem from '../../components/MenuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuGeometryScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometry'>;

const MenuGeometry = () => {
  const navigation = useNavigation<MenuGeometryScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Geometria"></MainContainerTitle>
      <View style={styles.contentContainer}>
        <MenuItem title="Area" onPress={() => {navigation.navigate('MenuGeometryArea')}}/>
        <MenuItem title="Circunferência" onPress={() => {navigation.navigate('MenuGeometryCircumferenceCircle')}}/>
      </View>
    </View>
  )
}

export default MenuGeometry

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})