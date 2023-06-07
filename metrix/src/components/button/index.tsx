import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FONTSIZE } from '../../constants/fontSize'
import { COLORS } from '../../constants/colors'

class ButtonProps {
    label: string = ''
    type: string = ''
    onPress: any = ''
}

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity 
            style={[
                styles.default,
                {
                    backgroundColor: props.type == 'primary' ? COLORS.primary : COLORS.white,
                    borderWidth: props.type == 'tertiary' ? 0 : 1
                }
            ]}
            onPress={props.onPress}>
            <Text style={{ color: props.type == 'primary' ? COLORS.white : COLORS.primary, fontSize: FONTSIZE.normal, fontWeight: '600' }}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    default: {
        width: '100%',
        height: 60,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: COLORS.primary,
    }
})