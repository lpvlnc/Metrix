import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { createRef, useEffect, useState } from 'react'
import MainContainerTitle from '../../components/MainContainerTitle'
import { COLORS } from '../../constants/colors'
import Input, { InputHandle } from '../../components/Input'
import { FONTSIZE } from '../../constants/fontSize'
import { MaterialIcons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'

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
        <MainContainerTitle title="Fatorar equação"></MainContainerTitle>
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
            />
          </View>
          {result && result?.solved == false &&
            <View>
              <Text style={styles.invalidResult}>Não foi possível obter o resultado da equação. Revise os dados e tente novamente.</Text>
            </View>
          }

          {isLoading &&
            <ActivityIndicator/>
          }
          {result?.solved && result?.steps.map((step, index) => {
              return (
                <Text style={styles.step}><Text style={styles.counter}>{index += 1}) </Text>{step}</Text>
              )
            })
          }

          {result?.solved && result?.result &&
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Resultado: <Text style={styles.result}>{result?.result}</Text></Text>
            </View>
          }
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button} onPress={solve}>
              <MaterialIcons name='send' size={26} style={{ color: COLORS.primary }} />
          </TouchableOpacity>
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
    buttonContainer: {
      position: 'absolute',
      top: 82,
      right: 20
    },
    button: {
      width: 60,
      height: 40,
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    counter: {
      color: COLORS.primary,
    },
    step: {
      color: COLORS.textPrimary,
      fontSize: FONTSIZE.normal,
      marginBottom: 10,
    },
    resultTitle: {
      color: COLORS.primary,
      fontSize: FONTSIZE.big,
    },
    resultContainer: {
      marginTop: 10,
    },
    result: {
      color: COLORS.textPrimary,
      fontSize: FONTSIZE.big,
      textDecorationLine: 'underline',
    },
    invalidResult: {
      color: COLORS.textPrimary,
      fontSize: FONTSIZE.normal
    }
})