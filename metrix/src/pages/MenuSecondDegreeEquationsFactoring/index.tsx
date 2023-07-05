import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { createRef, useEffect, useState } from 'react'
import MainContainerTitle from '../../components/MainContainerTitle'
import { COLORS } from '../../constants/colors'
import Input, { InputHandle } from '../../components/Input'
import { FONTSIZE } from '../../constants/fontSize'
import { MaterialIcons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import ProblemResult from '../../components/ProblemResult'

class ChatGPTResult {
  solved: boolean = false;
  steps: Array<string> = [];
  result: string = "";
}

const MenuSecondDegreeEquationsFactoring = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ChatGPTResult>();
  const equationInput = createRef<InputHandle>();
  const url = 'https://metrix-api.azurewebsites.net/api/v1/ChatGPT/Factoring';

  const solve = () => {
    if (input){
      setIsLoading(true);
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          problem: input
        }),
        headers:{
          'Accept': 'application/json',
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
    else {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'A equação precisa ser informada.'
      });
    }
  }
  
  return (
    <View style={styles.container}>
        <MainContainerTitle title="Fatorar a equação"></MainContainerTitle>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Input
              ref={equationInput}
              placeholder='Insira a equação aqui' 
              autoCapitalize='none'
              value={input}
              onChangeText={setInput}
              autoCorrect={false}
              keyboardType='default'
              buttonIcon="send"
              onButtonPress={solve}
              isLoading={isLoading}
            />
          </View>
          <ProblemResult solved={result?.solved} steps={result?.steps} result={result?.result} />
        </View>
    </View>
  )
}

export default MenuSecondDegreeEquationsFactoring

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
    margin: 20
  },
  inputContainer: {
      marginBottom: 10
  },
})