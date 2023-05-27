import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBarButton from '../NavBarButton'
import { COLORS } from '../../styles/colors'

const index = () => {
  return (
    <View style={styles.navbar}>
      <NavBarButton icon='widgets'></NavBarButton>
      <NavBarButton icon='camera-alt' plus={true}></NavBarButton>
      <NavBarButton icon='person'></NavBarButton>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    navbar: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 0,
      backgroundColor: COLORS.white,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 18,
      },
      shadowOpacity:  0.25,
      shadowRadius: 20.00,
      elevation: 24
    }
})