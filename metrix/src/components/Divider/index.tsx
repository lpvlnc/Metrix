import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'

const Divider = () => {
  return (
    <View style={styles.main}>
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({
    main: {
      borderTopColor: COLORS.secondaryDarker,
      borderTopWidth: 1,
    }
})