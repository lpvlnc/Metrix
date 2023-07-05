import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import MathJax from 'react-native-mathjax';
import MenuItem from '../../components/MenuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type MenuStatisticScreenProp = StackNavigationProp<RootStackParamList, 'MenuStatistic'>;

const MenuStatistic = () => {
  const navigation = useNavigation<MenuStatisticScreenProp>();
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Estatística"></MainContainerTitle>
      <View style={styles.contentContainer}>
        <MenuItem title="Média aritimética" onPress={() => navigation.navigate('MenuStatisticArithmeticMean')}/>
      </View>
    </View>
  )
}

export default MenuStatistic

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  }
})