import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors';
import { FONTSIZE } from '../../constants/fontSize';

type AboutTextProps = {
    text: string;
}

const AboutTitle = (props: AboutTextProps) => {
  return (
    <View>
      <Text style={styles.aboutTitle}>{'\t'}{props.text}</Text>
    </View>
  )
}

export default AboutTitle

const styles = StyleSheet.create({
    aboutTitle: {
      color: COLORS.primary,
      fontSize: FONTSIZE.big,
      marginVertical: 10
    }
})