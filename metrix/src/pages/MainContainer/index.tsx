import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MainContent from '../MainContent'
import MainContainerTitle from '../../components/MainContainerTitle'

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <MainContainerTitle title="Metrix"></MainContainerTitle>
      <View style={styles.contentContainer}>
        <MainContent></MainContent>
      </View>
    </View>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        margin: 10
    }
})