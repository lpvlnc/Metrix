import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
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
import About from '../../components/About';
import CustomBackdrop from '../../components/CustomBackdrop';
import BottomSheet from '@gorhom/bottom-sheet';
import { FONTSIZE } from '../../constants/fontSize';
import AboutText from '../../components/AboutText';
import AboutTitle from '../../components/AboutTitle';
import Redirect from '../../components/Redirect';


type MenuPhysicsUniversalGravitationalConstantScreenProp = StackNavigationProp<RootStackParamList, 'MenuPhysicsUniversalGravitationalConstant'>;

const MenuPhysicsUniversalGravitationalConstant = () => {
  const navigation = useNavigation<MenuPhysicsUniversalGravitationalConstantScreenProp>();
  const userBottomSheetRef = useRef<BottomSheet>(null);
  const [m1, setM1] = useState('');
  const m1Input = createRef<InputHandle>();
  const [m2, setM2] = useState('');
  const m2Input = createRef<InputHandle>();
  const [r, setR] = useState('');
  const rInput = createRef<InputHandle>();
  const [result, setResult] = useState<ChatGPTResult>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const url = 'https://metrix-api.azurewebsites.net/api/v1/ChatGPT/UniversalGravitationalConstant';
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => [ "50%", "100%"], []);
  const handleSnapPress = useCallback((index: number) => {
      bottomSheetRef.current?.snapToIndex(index);
      setIsOpen(true);
  }, [])
  const solve = () => {
    if (m1 && m1 && r) {
      setIsLoading(true);
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          problem: `m1 = ${m1} kg, m2 = ${m2} kg and r = ${r} meters`
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
        text2: 'As massas dos objetos 1 e 2 e a distância entre eles precisam ser informadas.'
      });
    }
  }
  return (
    <View style={styles.container}>
        <MainContainerTitle title="Gravitação universal"></MainContainerTitle>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.mathJaxContainer}>
              <MathJax
                  mathJaxOptions={MATH_JAX_OPTIONS}
                  html={
                    "$\\LARGE{F = \\frac{G.m_1.m_2}{r^2}}$"
                  }
                />
            </View>
            <View style={styles.inputContainer}>
              <Input
                ref={m1Input}
                placeholder='Massa do primeiro objeto (m1) em kg' 
                autoCapitalize='none'
                value={m1}
                onChangeText={setM1}
                autoCorrect={false}
                keyboardType='default'
                isLoading={isLoading}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                ref={m2Input}
                placeholder='Massa do segundo objeto (m2) em kg' 
                autoCapitalize='none'
                value={m2}
                onChangeText={setM2}
                autoCorrect={false}
                keyboardType='default'
                isLoading={isLoading}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                ref={rInput}
                placeholder='Insira a distância(r) em metros' 
                autoCapitalize='none'
                value={r}
                onChangeText={setR}
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
              <View style={styles.bsContentContainer}>
                <AboutTitle text="Como usar?"></AboutTitle>
                <AboutText text="- F é a força gravitacional entre dois corpos."></AboutText>
                <AboutText text="- G é a constante gravitacional (aproximadamente 6,67430 x 10^-11 m^3/(kg s^2))."></AboutText>
                <AboutText text="- m1 e m2 são as massas dos dois corpos envolvidos na interação gravitacional."></AboutText>
                <AboutText text="- r é a distância entre os centros de massa dos dois corpos."></AboutText>
                <AboutTitle text="Aplicação"></AboutTitle>
                <AboutText text='Os cálculos de gravitação universal, formulados por Sir Isaac Newton no século XVII, têm aplicações importantes em várias áreas da ciência e tecnologia. A teoria da gravitação universal descreve a atração mútua entre corpos com massa e é amplamente utilizada para entender e prever o comportamento dos corpos celestes no espaço.'></AboutText>
                <AboutText text="Uma das aplicações mais conhecidas dos cálculos de gravitação universal é na área da astronomia. Os astrônomos utilizam esses cálculos para prever a trajetória dos planetas, satélites naturais, asteroides e cometas em nosso sistema solar. Com base nas leis da gravitação, é possível determinar as órbitas dos corpos celestes, prever eclipses solares e lunares, e até mesmo calcular a posição de planetas em um determinado momento."></AboutText>
                <Redirect url='https://www.youtube.com/watch?v=g0ueHV4Dyk0&list=PL8Oo5W5s-R0r3wmV9VMXAopLzW_pHH8Kz&index=2&ab_channel=F%C3%ADsicacomDouglas'></Redirect>
              </View>
          </BottomSheet>
        </View>
    </View>
  )
}

export default MenuPhysicsUniversalGravitationalConstant

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
    margin: 20
  },
  inputContainer: {
      marginTop: 10
  },
  mathJaxContainer: {
    marginLeft: 80,
    marginBottom: 10
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
    top: -15,
    fontSize: FONTSIZE.normal,
    textDecorationLine: 'underline'
  },
})