import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { createRef, useEffect, useState } from 'react'
import MainContainerTitle from '../../components/MainContainerTitle'
import { COLORS } from '../../constants/colors'
import Input, { InputHandle } from '../../components/Input'
import { FONTSIZE } from '../../constants/fontSize'
import { MaterialIcons } from '@expo/vector-icons'

class ChatGPTResult {
  solved: boolean = false;
  steps: Array<string> = [];
  result: string = "";
}
const EquationBhaskara = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ChatGPTResult>();
  const equationInput = createRef<InputHandle>();
  const url = 'https://metrix-api.azurewebsites.net/api/v1/ChatGPT/Teste';
  
  const solve = async () => {
    setIsLoading(true);
    // useEffect(() => {
      
    // })
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        problem: 'teste'
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response) =>{
      if (response.ok) return response.json()
      alert(response.status)
    })
    .then((json) => setResult(json as ChatGPTResult))
    .catch((error) => alert(error))
    .finally(() => {setIsLoading(false)});
  }
  
  return (
    <View style={styles.container}>
        <MainContainerTitle title="Bhaskara"></MainContainerTitle>
        <View style={styles.contentContainer}>
          <Input
            ref={equationInput}
            placeholder='Insira a equação aqui' 
            autoCapitalize='none'
            value={input}
            onChangeText={setInput}
            autoCorrect={false}
            keyboardType='default'
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button} onPress={() => {solve}}>
              <MaterialIcons name='send' size={26} style={{ color: COLORS.primary }} />
          </TouchableOpacity>
        </View>
        <View>
          {isLoading ? (
            <ActivityIndicator/>
          ) : (
            <Text>Response: {result?.result}</Text>
          )
          }
        </View>
    </View>
  )
}

export default EquationBhaskara

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    contentContainer: {
    },
    buttonContainer: {
      position: 'absolute',
      top: 62,
      right: 0
    },
    button: {
      width: 60,
      height: 40,
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    equationTitleContainer: {
      margin: 20
    },
    equationTitle: {
      fontSize: FONTSIZE.normal
    }
})