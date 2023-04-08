import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Checkbox } from 'react-native-paper'
import { COLORS } from '../../styles/colors';
import Title from '../../components/title/Title';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

type CreateAccountScreenProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [hidePasswordConfirmation, setHidePasswordConfirmation] = useState(true);
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation<CreateAccountScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title text='Criar conta'></Title>
      </View>
      <View>
        <Input 
          icon='account-circle' 
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
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          theme={{
            colors: {
              primary: COLORS.primary
            }
          }}
        />
        <Text>Confirmo que li e concordo com os <Text style={styles.link}>Termos e Condições</Text> e com a <Text style={styles.link}>Política de privacidade</Text>.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainerCreateAccount}>
            <Button label='Criar conta' type='primary' onPress={() => navigation.navigate('CreateAccount')}/>
        </View>
        <View style={styles.buttonContainerLoginWithGoogle}>
            <Button label='Conectar com Google' type='secondary' onPress={() => navigation.navigate('Login')}/>
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
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
  },
  buttonContainerCreateAccount: {
  },
  buttonContainerLoginWithGoogle: {
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
})