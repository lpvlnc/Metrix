import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../styles/colors'

class ButtonBackProps {
    onPress: any = ''
}

const ButtonBack = (props: ButtonBackProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
         <MaterialIcons color={COLORS.primary}
                        name='arrow-back-ios'
                        size={36}
                        style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBack

const styles = StyleSheet.create({
  touchable: {
    position: 'relative',
    backgroundColor: COLORS.secondary,
    width: 60,
    height: 60,
    borderRadius: 100,
    padding: 10,
  },
  icon: {
    alignItems: 'center',
    textAlign: 'center',
  }
})