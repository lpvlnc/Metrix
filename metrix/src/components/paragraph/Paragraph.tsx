import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../styles/colors';

class ParagraphProps {
    text: string = ''
}

export default function Paragraph(props: ParagraphProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: COLORS.textSecondary,
        lineHeight: 25.6
    }
  })