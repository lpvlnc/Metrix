import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { COLORS } from '../../styles/colors';
import { FONTSIZE } from '../../styles/fontSize';
import { MaterialIcons } from '@expo/vector-icons'

type InputProps = {

};

const Input = () => {
    const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        underlineColorAndroid='transparent'
        placeholderTextColor={COLORS.secondaryDarker}
      />
      <MaterialIcons name="account-circle" size={26} color={COLORS.primary} style={styles.icon} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: COLORS.secondary,
    paddingLeft: 45,
    borderRadius: 8,
    fontSize: FONTSIZE.normal,
    borderWidth: 1,
    borderColor: COLORS.secondaryDarker
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 12
  }
})