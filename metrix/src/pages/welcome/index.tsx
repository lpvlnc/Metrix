import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Slider from '../../components/Slider'
import { SliderItemInterface } from '../../interfaces/SliderItemInterface'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'
import Toast from 'react-native-toast-message'
import { COLORS } from '../../constants/colors'
import Button from '../../components/Button'

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const items: SliderItemInterface[] = [
  {
    id: 1,
    title: 'Aprendizagem',
    image: require('../../assets/welcome/welcome1.png'),
    description: 'Impulsione seu aprendizado de forma simples e organizada.'
  },
  {
    id: 2,
    title: 'Informação',
    image:  require('../../assets/welcome/welcome2.png'),
    description: 'Receba analises e indicadores do seu progresso.'
  },
  {
    id: 3, 
    title: 'Controle',
    image:  require('../../assets/welcome/welcome3.png'),
    description: 'Controle seus horários de estudo de acordo com seu tempo livre.'
  }
]

export default function Welcome() {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  const navigation = useNavigation<welcomeScreenProp>();
  return (
    <View style={styles.container}>
      <View>
        <Slider items={items}></Slider>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainerLeft}>
            <Button label='Criar conta' type='primary' onPress={() => navigation.navigate('CreateAccount')}/>
        </View>
        <View style={styles.buttonContainerRight}>
            <Button label='Logar' type='secondary' onPress={() => navigation.navigate('Login')}/>
        </View>
      </View>
      <View>
        <Button label='Continuar sem conta' type='tertiary' onPress={() => navigation.navigate('Main')}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20
  },
  buttonContainerLeft: {
    flex: 1,
    marginRight: 9,
  },
  buttonContainerRight: {
    flex: 1,
    marginLeft: 9
  }
})