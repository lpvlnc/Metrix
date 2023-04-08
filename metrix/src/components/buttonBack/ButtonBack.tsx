import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../styles/colors'

class ButtonBackProps {
    onPress: any = ''
}

const ButtonBack = (props: ButtonBackProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
         <MaterialIcons
                        name='arrow-back'
                        size={36}/>
    </TouchableOpacity>
  )
}

export default ButtonBack

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        width: 60,
        borderRadius: 100,
        padding: 10
    }
})