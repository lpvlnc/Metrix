import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { COLORS } from '../../styles/colors'
import { FONTSIZE } from '../../styles/fontSize'

class ButtonProps {
    label: string = ''
    type: string = ''
    onPress: any = ''
}

class ButtonStyleInfo  {
    labelColor: string = ''
    style: StyleProp<ViewStyle>

    constructor(labelColor: string, style: StyleProp<ViewStyle>) {
        this.labelColor = labelColor
        this.style = style
    }
}

const Button = (props: ButtonProps) => {
    var buttonStyleInfo: ButtonStyleInfo = GetButtonStyleInfo(props.type)
    return (
        <TouchableOpacity style={buttonStyleInfo.style} onPress={props.onPress}>
            <Text style={{ color: buttonStyleInfo.labelColor, fontSize: FONTSIZE.normal, fontWeight: '600' }}>{props.label}</Text>
        </TouchableOpacity>
    )
}
function GetButtonStyleInfo(type: string): ButtonStyleInfo {
    switch(type) {
        case 'primary':
            return new ButtonStyleInfo(COLORS.white, styles.primary);
        case 'secondary':
            return new ButtonStyleInfo(COLORS.primary, styles.secondary);
        default:
            return new ButtonStyleInfo(COLORS.white, styles.primary);
    }
}


export default Button

const styles = StyleSheet.create({
    primary: {
        backgroundColor: COLORS.primary,
        width: '100%',
        height: 60,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    secondary: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: 60,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})