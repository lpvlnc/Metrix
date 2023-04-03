import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../styles/colors';
import { FONTSIZE } from '../../styles/fontSize';

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
        fontSize: FONTSIZE.big,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    }
  })