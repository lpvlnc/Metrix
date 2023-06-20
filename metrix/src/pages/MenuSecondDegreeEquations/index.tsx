import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainerTitle from '../../components/MainContainerTitle'
import MenuItem from '../../components/MenuItem'
import { COLORS } from '../../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'
import { useNavigation } from '@react-navigation/native'

type MenuSecondDegreeEquationsScreenProp = StackNavigationProp<RootStackParamList, 'MenuSecondDegreeEquations'>;

const MenuSecondDegreeEquations = () => {
    const navigation = useNavigation<MenuSecondDegreeEquationsScreenProp>();
    return (
        <View style={styles.container}>
            <MainContainerTitle title="Segundo grau"></MainContainerTitle>
            <View style={styles.contentContainer}>
                <MenuItem title="Bhaskara" onPress={() => {navigation.navigate('EquationBhaskara')}}/>
                <MenuItem title="Fatorar"/>
            </View>
        </View>
    )
}

export default MenuSecondDegreeEquations

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    contentContainer: {
    }
})