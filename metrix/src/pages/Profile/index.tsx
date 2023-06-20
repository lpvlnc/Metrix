import { Image, Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import MenuItem from '../../components/MenuItem';
import Divider from '../../components/Divider';
import { FONTSIZE } from '../../constants/fontSize';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

type ProfileScreenProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const Profile = () => {
  const navigation = useNavigation<ProfileScreenProp>();
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.profileTop}>
              <Image
              style={styles.profilePicture}
              source={require('../../assets/images/profile_picture_placeholder.png')}
              />
              <Text style={styles.profileName}>Administrador</Text>
            </View>
          </View>
          <View style={styles.profileBottom}>
            <MenuItem title="Gerenciar conta"/>
            <MenuItem title="Preferências"/>
            <MenuItem title="Avaliar aplicativo"/>
            <MenuItem title="Contate-nos"/>
            <MenuItem title="Política de privacidade"/>
            <MenuItem title="Termos de serviço"/>
            <MenuItem title="Sair" onPress={() => navigation.navigate('Welcome')}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.primary,
    },
    scrollView: {
      backgroundColor: COLORS.white,
    },
    profileContainer: {
      flex: 1,
      height: 250,
      alignContent: 'center',
      alignItems: 'center'
    },
    profileTop: {
      flex: 1,
      alignContent: 'center',
      alignItems: 'center'
    },
    profilePicture: {
      width: 100,
      height: 100,
      borderWidth: 100,
      borderRadius: 100,
      overflow: "hidden",
    },
    profileName: {
      color: COLORS.white,
      fontSize: FONTSIZE.normal,
      marginTop: 10
    },
    profileBottom: {
      backgroundColor: COLORS.white,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      padding: 20
    },
})