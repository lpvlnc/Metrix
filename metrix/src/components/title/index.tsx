import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../styles/colors';
import { FONTSIZE } from '../../styles/fontSize';
import { MaterialIcons } from '@expo/vector-icons'
class TitleProps {
    text: string = ''
    onPressButtonBack?: any;
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