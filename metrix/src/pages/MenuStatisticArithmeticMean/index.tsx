import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MainContainerTitle from '../../components/MainContainerTitle'
import { COLORS } from '../../constants/colors'
import Input, { InputHandle } from '../../components/Input'
import { FONTSIZE } from '../../constants/fontSize'
import { MaterialIcons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import ProblemResult from '../../components/ProblemResult'
import { MATH_JAX_OPTIONS } from '../../constants/mathJaxOptions'
import MathJax from 'react-native-mathjax';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import CustomBackdrop from '../../components/CustomBackdrop'
import AboutTitle from '../../components/AboutTitle'
import AboutText from '../../components/AboutText'
import Redirect from '../../components/Redirect'

const MenuStatisticArithmeticMean = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ChatGPTResult>();
  const equationInput = createRef<InputHandle>();
  const url = 'https://metrix-api.azurewebsites.net/api/v1/ChatGPT/ArithmeticMean';
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
      <MainContainerTitle title="Média aritmética"></MainContainerTitle>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.mathJaxContainer}>
            <MathJax
              mathJaxOptions={MATH_JAX_OPTIONS}
              html={
                "$\\LARGE{\\overline{X} = \\frac{x_1+x_2+x_3+...+x_n}{n}}$"
              }
            />
          </View>
          <View style={styles.inputContainer}>
              <Input
                ref={equationInput}
                placeholder='Ex: 1, 2, 3, 4, 5' 
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
                <AboutText text="- Some todos os valores do conjunto."></AboutText>
                <AboutText text="- Divida a soma obtida pelo número total de valores no conjunto."></AboutText>
                <AboutTitle text="Aplicação"></AboutTitle>
                <AboutText text='Os cálculos da média aritmética são amplamente utilizados em diversas áreas, desde a matemática básica até aplicações práticas em diferentes campos. A média aritmética é uma medida estatística que representa um valor central de um conjunto de dados, obtida pela soma de todos os valores dividida pelo número total de elementos.'></AboutText>
                <AboutText text="Educação: Ao somar as notas obtidas em diferentes avaliações e dividir pelo número total de avaliações, é possível obter a média aritmética, que é um indicador do desempenho geral do aluno em determinada disciplina."></AboutText>
                <AboutText text="Finanças: Os cálculos da média aritmética são aplicados para analisar o desempenho de investimentos e calcular índices financeiros. Por exemplo, o retorno médio de um investimento ao longo de vários anos pode ser calculado utilizando a média aritmética dos retornos anuais. Além disso, a média aritmética também é utilizada para calcular médias de preços, inflação e outros indicadores econômicos."></AboutText>
                <AboutText text="Planejamento e gestão: Os cálculos da média aritmética também são aplicados em planejamento e gestão, seja para estimar valores futuros com base em dados históricos ou para tomar decisões com base em informações médias. Por exemplo, ao realizar previsões de vendas, é possível utilizar a média aritmética das vendas passadas como base para projeções futuras."></AboutText>
                <Redirect url='https://www.youtube.com/watch?v=gibWiImVcOU&list=PL-LPJn0YTIEGuhRXW8TMsrwVvP9PvKy7Q&ab_channel=Matem%C3%A1ticanoPapel'></Redirect>
              </View>
            </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </View>
  )
}

export default MenuStatisticArithmeticMean

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
    marginLeft: 30,
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