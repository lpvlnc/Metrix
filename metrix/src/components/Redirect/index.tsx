import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { FONTSIZE } from '../../constants/fontSize'

type RedirectProps = {
    url: string
}
const Redirect = (props: RedirectProps) => {
  return (
    <View>
        <TouchableOpacity onPress={() => {
            Linking.openURL(props.url)
            }} >
                <Text style={styles.redirect}>Ver mais no youtube</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Redirect

const styles = StyleSheet.create({
    redirect: {
        color: COLORS.primary,
        fontSize: FONTSIZE.big,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginBottom: 20
    }
})