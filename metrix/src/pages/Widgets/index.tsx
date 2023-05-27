import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Widgets = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

export default Widgets

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})