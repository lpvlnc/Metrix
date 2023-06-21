import { ActivityIndicator, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { createRef, useState } from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import Input, { InputHandle } from '../../components/Input';
import Toast from 'react-native-toast-message';
import { FONTSIZE } from '../../constants/fontSize';
import { MaterialIcons } from '@expo/vector-icons'

type MenuGeometryCircleAreaScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometryAreaCircle'>;

const MenuGeometryAreaCircle = () => {
  const navigation = useNavigation<MenuGeometryCircleAreaScreenProp>();
  const [radius, setRadius] = useState('');
  const radiusInput = createRef<InputHandle>();
  const [result, setResult] = useState<ChatGPTResult>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const url = 'https://metrix-api.azurewebsites.net/api/v1/ChatGPT/CircleArea';

  const solve = () => {
    if (radius) {
      setIsLoading(true);
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          problem: radius
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
        <MainContainerTitle title="Área do círculo"></MainContainerTitle>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Input
              ref={radiusInput}
              placeholder='Insira o raio do círculo aqui' 
              autoCapitalize='none'
              value={radius}
              onChangeText={setRadius}
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

export default MenuGeometryAreaCircle

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