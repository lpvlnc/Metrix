import { ScrollView, StyleSheet, View } from 'react-native'
import React, { createRef, useState } from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import Input, { InputHandle } from '../../components/Input';
import ProblemResult from '../../components/ProblemResult';
import MathJax from 'react-native-mathjax';
import { MATH_JAX_OPTIONS } from '../../constants/mathJaxOptions'
import Toast from 'react-native-toast-message';

type MenuGeometryAreaSquareScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometryAreaSquare'>;

const MenuGeometryAreaSquare = () => {
  const navigation = useNavigation<MenuGeometryAreaSquareScreenProp>();
  const [base, setBase] = useState('');
  const baseInput = createRef<InputHandle>();
  const [height, setHeight] = useState('');
  const heightInput = createRef<InputHandle>();
  const [result, setResult] = useState<ChatGPTResult>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const url = 'https://metrix-api.azurewebsites.net/api/v1/ChatGPT/SquareArea';

  const solve = () => {
    if (base && height) {
      setIsLoading(true);
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          problem: `base = ${base} and height = ${height}`
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
        text2: 'A base e a altura precisam ser informadas.'
      });
    }
  }
  return (
    <View style={styles.container}>
        <MainContainerTitle title="Área do quadrado"></MainContainerTitle>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.mathJaxContainer}>
              <MathJax
                  mathJaxOptions={MATH_JAX_OPTIONS}
                  html={
                    "$\\LARGE{A = b.h}$"
                  }
                />
            </View>
            <View style={styles.inputContainer}>
              <Input
                ref={baseInput}
                placeholder='Insira a base(b) em cm' 
                autoCapitalize='none'
                value={base}
                onChangeText={setBase}
                autoCorrect={false}
                keyboardType='default'
                isLoading={isLoading}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                ref={heightInput}
                placeholder='Insira a altura(h) em cm' 
                autoCapitalize='none'
                value={height}
                onChangeText={setHeight}
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

export default MenuGeometryAreaSquare


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