import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { createRef, useState, useEffect } from 'react'
import { COLORS } from '../../styles/colors';
import Title from '../../components/Title';
import Input, { InputHandle } from '../../components/Input';
import Button from '../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import ButtonBack from '../../components/ButtonBack';

type LoginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigation = useNavigation<LoginScreenProp>();

  const emailInput = createRef<InputHandle>();
  const passwordInput = createRef<InputHandle>();

  useEffect(() => emailInput.current?.resetError(), [email])
  useEffect(() => passwordInput.current?.resetError(), [password])

  function login() {
    // if (email == '') {
    //   alert('a');
    //   emailInput.current?.focusOnError();
    //   return;
    // }
    // if (password == '') {
    //   alert('a');
    //   passwordInput.current?.focusOnError();
    //   return;
    // }
  }

  return (
    <View style={styles.container}>
      <View>
        <ButtonBack onPress={() => navigation.navigate('Welcome')}></ButtonBack>
      </View>
      <View style={styles.titleContainer}>
        <Title text='Login'></Title>
      </View>
      <View>
        <Input
          // title='E-mail'
          ref={emailInput}
          icon='alternate-email' 
          placeholder='seuemail@mail.com' 
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          keyboardType='email-address'
        />
      </View>
      <View>
        <Input
          // title='Senha'
          ref={passwordInput}
          icon='lock' 
          secureTextEntry 
          placeholder='********' 
          autoCapitalize='none'
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <View>
          <Button label='Login' type='primary' onPress={login}></Button>
        </View>
        <View style={styles.createAccountContainer}>
          <View>
            <Text style={{color: COLORS.textSecondary}}>Ainda não possui uma conta? </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={styles.link}>Criar conta</Text>
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
  forgotPassword: {
    color: COLORS.primary,
    textAlign: 'right'
  },
  createAccountContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: COLORS.primary,
    textAlign: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  }
})