import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors';
import { FONTSIZE } from '../../constants/fontSize';

type AboutTextProps = {
    text: string;
}

const AboutText = (props: AboutTextProps) => {
  return (
    <View>
      <Text style={styles.aboutText}>{'\t'}{props.text}</Text>
    </View>
  )
}

export default AboutText

const styles = StyleSheet.create({
    aboutText: {
        color: COLORS.textPrimary,
        fontSize: FONTSIZE.normal,
        marginBottom: 10
    }
})