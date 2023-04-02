import { View, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../../components/button/Button'
import { COLORS } from '../../styles/colors'
import Slider from '../../components/slider/Slider'
import { SliderItemInterface } from '../../interfaces/SliderItemInterface'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

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
  const navigation = useNavigation<loginScreenProp>();
  return (
    <View style={styles.container}>
      <View>
        <Slider items={items}></Slider>
      </View>
      <View style={styles.buttonContainer}>
            <View style={styles.buttonContainerLeft}>
                <Button label='Criar conta' type='primary' onPress=""/>
            </View>
            <View style={styles.buttonContainerRight}>
                <Button label='Logar' type='secondary' onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
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