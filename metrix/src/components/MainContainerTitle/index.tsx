import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { FONTSIZE } from '../../constants/fontSize'
import { MaterialIcons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'
import { useNavigation } from '@react-navigation/native'

type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

class MainContainerProps {
    title: string = ''
}

const MainContainerTitle = (props: MainContainerProps) => {
const navigation = useNavigation<MainScreenProp>();
  return (
    <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>{props.title}</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => {navigation.navigate('Profile')}}>
            <MaterialIcons color={COLORS.primary}
                           name='account-circle'
                           size={36}
                           />
        </TouchableOpacity>
    </View>
  )
}

export default MainContainerTitle;


const styles = StyleSheet.create({
    mainTitleContainer: {
        backgroundColor: COLORS.white,
        alignContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    mainTitle: {
        textAlign: 'center',
        fontSize: FONTSIZE.giant,
        fontWeight: 'bold',
        color: COLORS.primary,
        paddingVertical: 10
    },
    profileButton: {
        position: 'absolute',
        right: 20,
        top: 10
    },
})