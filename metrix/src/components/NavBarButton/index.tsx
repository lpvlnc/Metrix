import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors';

type NavBarButtonProps = {
  icon: any;
  plus?: boolean;
}

const index = (props: NavBarButtonProps) => {
  return (
    <TouchableOpacity style={ props.plus ? [styles.container, styles.containerPlus] : styles.container}>
        <MaterialIcons style={{
            color: props.plus ? COLORS.white : COLORS.primary,
            fontSize: props.plus ? 40 : 30
        }} name={props.icon} />
    </TouchableOpacity>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 50,
    borderRadius: 25,
  },
  containerPlus: {
    backgroundColor: COLORS.primary,
    height: 70,
    width: 80,
    marginTop: -50
  }
})