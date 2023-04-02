import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
        fontSize: 20,
        fontWeight: 'bold',
    }
  })