import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import MathJax from 'react-native-mathjax';
import MenuItem from '../../components/MenuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuPhysicsScreenProp = StackNavigationProp<RootStackParamList, 'MenuPhysics'>;

const MenuPhysics = () => {
  const navigation = useNavigation<MenuPhysicsScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Física"></MainContainerTitle>
      <View style={styles.contentContainer}>
        <MenuItem title="Gravitação universal" onPress={() => navigation.navigate('MenuPhysicsUniversalGravitationalConstant')}/>
      </View>
    </View>
  )
}

export default MenuPhysics

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})