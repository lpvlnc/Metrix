import React, { useState, forwardRef, useImperativeHandle, createRef } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardTypeOptions, Text } from 'react-native'
import { FONTSIZE } from '../../constants/fontSize';
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors';

export type InputHandle = {
  focusOnError(): void;
  resetError(): void;
}

type InputProps = {
  title?: string | undefined;
  value?: string | undefined;
  secureTextEntry?: boolean | undefined;
  icon?: any;
  placeholder?: string | undefined;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
};

const Input = forwardRef<InputHandle, InputProps>((props: InputProps, ref) => {
  const [text, setText] = useState('');
  const [secureText, setSecureText] = useState(props.secureTextEntry)
  const [error, setError] = useState(false);

  const inputRef = createRef<TextInput>();

  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputRef.current?.focus();
    },
    resetError() {
      setError(false)
    }
  }))

  function getBorderColor(): string {
    return error ? COLORS.errorColor : COLORS.secondary;
  }

  function getIconColor(): string {
    return error ? COLORS.errorColor : COLORS.primary;
  }

  return (
    <View>
      {props.title && (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      )}
      <View style={styles.containerInput}>
        <TextInput
          ref={inputRef}
          style={
            [
              styles.input, 
              { 
                paddingLeft: props.icon ? 45 : 15,
                paddingRight: props.secureTextEntry ? 45 : 15,
                borderColor: getBorderColor() 
              }
            ]
          } 
          underlineColorAndroid='transparent'
          placeholderTextColor={COLORS.secondaryDarker}
          cursorColor={COLORS.primary}
          {...props}
          secureTextEntry={secureText}
          autoCorrect={props.autoCorrect}
        />
        {props.icon && (
          <MaterialIcons name={props.icon} size={26} style={[styles.icon, { color: getIconColor()}]} />
        )}
        {props.secureTextEntry && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <MaterialIcons name={secureText ? "visibility" : "visibility-off"} 
                        size={26} 
                        style={styles.iconVisibility} />
        </TouchableOpacity>
        )}
      </View>
    </View>
  )
})

export default Input

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    marginBottom: 20
  },
  title: {
    fontSize: FONTSIZE.small,
    fontWeight: 'bold'
  },
  titleContainer: {
    paddingBottom: 5
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    fontSize: FONTSIZE.normal,
    borderWidth: 1
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 12
  },
  iconVisibility: {
    position: 'absolute',
    right: 10,
    top: 12,
    color: COLORS.primary
  }
})