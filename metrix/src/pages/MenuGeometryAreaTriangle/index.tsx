import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { createRef, useCallback, useMemo, useRef, useState } from 'react'
import { COLORS } from '../../constants/colors'
import MainContainerTitle from '../../components/MainContainerTitle'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import MathJax from 'react-native-mathjax';
import { MATH_JAX_OPTIONS } from '../../constants/mathJaxOptions'
import Input, { InputHandle } from '../../components/Input';
import Toast from 'react-native-toast-message';
import ProblemResult from '../../components/ProblemResult';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CustomBackdrop from '../../components/CustomBackdrop';
import AboutTitle from '../../components/AboutTitle';
import AboutText from '../../components/AboutText';
import { FONTSIZE } from '../../constants/fontSize';
import Redirect from '../../components/Redirect';

type MenuGeometryAreaTriangleScreenProp = StackNavigationProp<RootStackParamList, 'MenuGeometryAreaTriangle'>;

const MenuGeometryAreaTriangle = () => {
  const navigation = useNavigation<MenuGeometryAreaTriangleScreenProp>();
  const [base, setBase] = useState('');
  const baseInput = createRef<InputHandle>();
  const [height, setHeight] = useState('');
  const heightInput = createRef<InputHandle>();
  const [result, setResult] = useState<ChatGPTResult>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const url = 'https://metrix-api.azurewebsites.net/api/v1/ChatGPT/TriangleArea';
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => [ "50%", "100%"], []);
  const handleSnapPress = useCallback((index: number) => {
      bottomSheetRef.current?.snapToIndex(index);
      setIsOpen(true);
  }, [])
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
        <MainContainerTitle title="Área do triângulo"></MainContainerTitle>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.mathJaxContainer}>
              <MathJax
                  mathJaxOptions={MATH_JAX_OPTIONS}
                  html={
                    "$\\LARGE{A = \\frac{b.h}{2}}$"
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
                <AboutText text="A fórmula geral para calcular a área de um triângulo é: Área = (base * altura) / 2"></AboutText>
                <AboutText text="Onde:"></AboutText>
                <AboutText text="    - Base é a medida da base do triângulo."></AboutText>
                <AboutText text="    - Altura é a medida da altura do triângulo, que é a distância perpendicular entre a base e o vértice oposto."></AboutText>
                <AboutText text="Substitua os valores na fórmula da área do triângulo"></AboutText>
                <AboutText text="Realize os cálculos para obter o valor da área. Certifique-se de usar as mesmas unidades de medida para a base e a altura, pois a área será expressa em unidades quadradas."></AboutText>
                <AboutTitle text="Aplicação"></AboutTitle>
                <AboutText text='Construção e arquitetura: No campo da construção e da arquitetura, os cálculos de área de triângulo são essenciais. Eles são aplicados no planejamento e na medição de áreas de terrenos, no cálculo de áreas de superfícies e fachadas de edifícios triangulares, e também em cálculos de materiais necessários para revestimentos e coberturas.'></AboutText>
                <AboutText text='Engenharia: Na engenharia civil, por exemplo, eles são aplicados no projeto de estruturas, cálculo de áreas de seções transversais de vigas e pilares e no dimensionamento de fundações.'></AboutText>
                <AboutText text='Cartografia e topografia: Na cartografia e na topografia, os cálculos de área de triângulo são usados para realizar medições precisas de áreas de terrenos, mapeamento de superfícies e representação gráfica de regiões'></AboutText>
                <Redirect url='https://www.youtube.com/watch?v=XlJEpO0K4b0&list=PLTPg64KdGgYhy8stGM4z2_Hzb3zTfA77Z&index=8&ab_channel=ProfessorFerretto'></Redirect>
              </View>
            </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </View>
  )
}

export default MenuGeometryAreaTriangle

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