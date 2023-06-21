import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Title from '../../components/Title';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ButtonBack from '../../components/ButtonBack';
import { COLORS } from '../../constants/colors';
import Toast from 'react-native-toast-message';

type CreateAccountScreenProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [hidePasswordConfirmation, setHidePasswordConfirmation] = useState(true);
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation<CreateAccountScreenProp>();

  function login() {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'O e-mail precisa ser informado.'
      });
      return;
    }
    if (!password) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'A senha precisa ser informada.'
      });
      return;
    }

    if (email && password) {
      if (email != 'admin@mail.com' && password != 'admin123') {
        Toast.show({
          type: 'error',
          text1: 'Credenciais inválidas',
          text2: 'E-mail ou senha incorretos.'
        });
        return
      } else {
        navigation.navigate('Main');
        return
      }
    }
    return
  }

  return (
    <View style={styles.container}>
      <View>
        <ButtonBack onPress={() => navigation.navigate('Welcome')}></ButtonBack>
      </View>
      <View style={styles.titleContainer}>
        <Title text='Criar conta'></Title>
      </View>
      <View>
        <Input 
          icon='account-circle' 
          placeholder='Usuário' 
          autoCapitalize='none'
        />
      </View>
      <View>
        <Input 
          icon='alternate-email' 
          placeholder='E-mail' 
          autoCapitalize='none'
          keyboardType='email-address'
        />
      </View>
      <View>
        <Input 
          icon='lock' 
          secureTextEntry 
          placeholder='Senha' 
          autoCapitalize='none'
        />
      </View>
      <View>
        <Input 
          icon='lock' 
          secureTextEntry 
          placeholder='Confirmação de senha' 
          autoCapitalize='none'
        />
      </View>
      <View>
        <Text style={{color: COLORS.textSecondary}}>
          Ao criar uma conta você confirma que concorda com os
          <Text style={styles.link}> Termos e Condições </Text> 
          e com a 
          <Text style={styles.link}> Política de privacidade</Text>
          .
        </Text>
      </View>
      <View style={styles.bottom}>
        <View>
        <Button label='Criar conta' type='primary' onPress={() => navigation.navigate('Login')}/>
        </View>
        <View style={styles.loginContainer}>
          <View>
            <Text style={{color: COLORS.textSecondary}}>Já possui uma conta? </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Fazer login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  titleContainer: {
    marginBottom: 40
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingVertical: 20,
  },
  link: {
    color: COLORS.primary
  },
  loginContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  }
})