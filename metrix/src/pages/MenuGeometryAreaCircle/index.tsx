import { ActivityIndicator, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native'
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
import ProblemResult from '../../components/ProblemResult';
import MathJax from 'react-native-mathjax';
import { MATH_JAX_OPTIONS } from '../../constants/mathJaxOptions'

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
        text2: 'O raio precisa ser informado.'
      });
    }
  }
  return (
    <View style={styles.container}>
        <MainContainerTitle title="Área do círculo"></MainContainerTitle>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.mathJaxContainer}>
              <MathJax
                  mathJaxOptions={MATH_JAX_OPTIONS}
                  html={
                    "$\\LARGE{A = \\pi.r^2}$"
                  }
                />
              </View>
            <View style={styles.inputContainer}>
              <Input
                ref={radiusInput}
                placeholder='Insira o raio do círculo em cm.' 
                autoCapitalize='none'
                value={radius}
                onChangeText={setRadius}
                autoCorrect={false}
                keyboardType='default'
                buttonIcon="send"
                onButtonPress={solve}
                isLoading={isLoading}
              />
            </View>
            <ProblemResult solved={result?.solved} steps={result?.steps} result={result?.result} />
          </View>
        </ScrollView>
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
  mathJaxContainer: {
    marginLeft: 115,
    marginBottom: 20
  },
})