import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MainContainerTitle from '../../components/MainContainerTitle'
import { COLORS } from '../../constants/colors'
import Input, { InputHandle } from '../../components/Input'
import { FONTSIZE } from '../../constants/fontSize'
import { MaterialIcons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import { API } from '../../constants/api'
import ProblemResult from '../../components/ProblemResult'
import MathJax from 'react-native-mathjax';
import { MATH_JAX_OPTIONS } from '../../constants/mathJaxOptions'
import DisplayFormula from '../../components/DisplayFormula'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import CustomBackdrop from '../../components/CustomBackdrop'
import AboutTitle from '../../components/AboutTitle'
import AboutText from '../../components/AboutText'
import Redirect from '../../components/Redirect'

const MenuSecondDegreeEquationsBhaskara = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ChatGPTResult>();
  const equationInput = createRef<InputHandle>();
  const url = API.production + 'ChatGPT/Bhaskara/true';
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => [ "50%", "100%"], []);
  const handleSnapPress = useCallback((index: number) => {
      bottomSheetRef.current?.snapToIndex(index);
      setIsOpen(true);
  }, [])

  const solve = () => {
    if (input) {
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
        <MainContainerTitle title="Bhaskara"></MainContainerTitle>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.mathJaxContainer}>
              <MathJax
                mathJaxOptions={MATH_JAX_OPTIONS}
                html={
                  "$\\LARGE{\\Delta = b^2 - 4.a.c}$"
                }
              />
            </View>
            <View style={styles.mathJaxContainer}>
              <MathJax
                mathJaxOptions={MATH_JAX_OPTIONS}
                html={
                  "$\\LARGE{X = \\frac{-b \\pm \\sqrt{\\Delta}}{2.a}}$"
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                ref={equationInput}
                placeholder='Ex: -x^2+4x-3=0' 
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
            <View>
              <TouchableOpacity onPress={() => {handleSnapPress(1)}} >
                <Text style={styles.about}>Sobre</Text>
              </TouchableOpacity>
            </View>
            <ProblemResult solved={result?.solved} steps={result?.steps} result={result?.result} />
          </View>
        </ScrollView>
        <View style={[isOpen && styles.bsContainer]}>
          <BottomSheet
              ref={bottomSheetRef}
              index={1}
              snapPoints={snapPoints}
              backdropComponent={CustomBackdrop}
              enablePanDownToClose={true}
              onClose={() => setIsOpen(false)}
              >
              <BottomSheetScrollView>
                <View style={styles.bsContentContainer}>
                  <AboutTitle text="Como usar?"></AboutTitle>
                  <AboutText text="Identifique os coeficientes da equação (a, b, c)"></AboutText>
                  <AboutText text="Na forma geral ax^2 + bx + c = 0"></AboutText>
                  <AboutText text="Substitua os valores na fórmula de Bhaskara:"></AboutText>
                  <AboutText text="x = (-b ± √(b^2 - 4ac)) / (2a)"></AboutText>
                  <AboutText text="Onde:"></AboutText>
                  <AboutText text="    - a é o coeficiente de x^2"></AboutText>
                  <AboutText text="    - b é o coeficiente de x"></AboutText>
                  <AboutText text="    - c é o termo constante"></AboutText>
                  <AboutText text="Realize os cálculos"></AboutText>
                  <AboutText text="Calcule o discriminante: Δ = b^2 - 4ac."></AboutText>
                  <AboutText text="O discriminante determina o tipo e o número de soluções da equação"></AboutText>
                  <AboutText text="Se Δ for maior que zero (Δ > 0), a equação possui duas soluções reais e distintas"></AboutText>
                  <AboutText text="Utilize a fórmula de Bhaskara para calcular as soluções substituindo os valores de a, b e c:"></AboutText>
                  <AboutText text="    x' = (-b + √Δ) / (2a)"></AboutText>
                  <AboutText text="    x'' = (-b - √Δ) / (2a)"></AboutText>
                  <AboutText text="Se Δ for igual a zero (Δ = 0), a equação possui apenas uma solução real"></AboutText>
                  <AboutText text="Utilize a fórmula de Bhaskara para calcular a solução substituindo os valores de a, b e c:"></AboutText>
                  <AboutText text="    x = -b / (2a)"></AboutText>
                  <AboutText text="Se Δ for menor que zero (Δ < 0), a equação não possui soluções reais. Nesse caso, a equação é chamada de equação sem solução real."></AboutText>
                  <AboutText text="Se houver soluções reais, esses são os valores de x que satisfazem a equação quadrática. Lembre-se de que a equação pode ter uma ou duas soluções, dependendo do valor de Δ"></AboutText>
                  <AboutText text="É importante observar que a fórmula de Bhaskara é aplicável apenas a equações quadráticas. Para outros tipos de equações, podem ser necessárias outras técnicas ou métodos."></AboutText>
                  <AboutTitle text="Aplicação"></AboutTitle>
                  <AboutText text="Essa fórmula, desenvolvida pelo matemático indiano Bhaskara no século XII, permite encontrar as soluções de equações polinomiais de segundo grau."></AboutText>
                  <AboutText text="A fórmula de Bhaskara é aplicada em várias áreas do conhecimento, incluindo matemática, física, engenharia e ciências da computação. Aqui estão algumas das principais aplicações dos cálculos com a fórmula de Bhaskara:"></AboutText>
                  <AboutText text="Matemática: Ela é frequentemente ensinada em escolas e universidades como um método para encontrar as raízes de uma equação de segundo grau."></AboutText>
                  <AboutText text="Física: Determinar o tempo de queda de um objeto em queda livre ou calcular a altura máxima alcançada por um projétil lançado verticalmente"></AboutText>
                  <AboutText text="Jogos: Cálculos em gráficos e animações e simulações físicas, onde é necessário determinar a trajetória ou a posição de objetos em movimento dentro do jogo."></AboutText>
                  <Redirect url='https://www.youtube.com/watch?v=KarCkEGZqXA&list=PLGyv8aUrOlzBk-ctqa9e7jBlLxnqGcrho&index=2&ab_channel=GiscomGizMatem%C3%A1tica'></Redirect>
                </View>
              </BottomSheetScrollView>
          </BottomSheet>
        </View>
    </View>
  )
}

export default MenuSecondDegreeEquationsBhaskara

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
      marginLeft: 60,
      marginBottom: 20
    },
    bsContainer: {
      flex: 1,
      padding: 24,
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 1
    },
    bsContentContainer: {
        flex: 1,
        paddingHorizontal: 15
    },
    about: {
      color: COLORS.primary,
      top: -25,
      fontSize: FONTSIZE.normal,
      textDecorationLine: 'underline'
    }
})