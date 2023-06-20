import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'

const ButtonCategory = () => {
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={() => { }}>
            <MaterialIcons color={COLORS.primary}
                            name='account-circle'
                            size={36}
                            />
          </TouchableOpacity>
    </View>
  )
}

export default ButtonCategory

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    },
    button: {

    }
})