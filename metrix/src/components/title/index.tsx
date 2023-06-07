import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FONTSIZE } from '../../constants/fontSize';
import { COLORS } from '../../constants/colors';
class TitleProps {
    text: string = ''
}

export default function Title(props: TitleProps) {
    return (
        <View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: FONTSIZE.giant,
        fontWeight: 'bold',
        color: COLORS.primary,
    }
  })