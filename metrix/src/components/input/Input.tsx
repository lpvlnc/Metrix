import React from 'react'
import { TextInput } from 'react-native-paper';

type InputProps = {

};

const Input = () => {
    const [text, setText] = React.useState('');
  return (
    <TextInput
      label="Nome"
      value={text}
      onChangeText={text => setText(text)}
    />
  )
}

export default Input