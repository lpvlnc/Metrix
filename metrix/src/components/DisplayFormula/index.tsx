import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FONTSIZE } from '../../constants/fontSize';
import { COLORS } from '../../constants/colors';
import MathJax from 'react-native-mathjax';

class DisplayFormulaProps {
    html: string = ''
}

const DisplayFormula = (props: DisplayFormulaProps) => {

    const mathJaxOptions = {
        messageStyle: "none",
        extensions: ["tex2jax.js"],
        jax: ["input/TeX", "output/HTML-CSS"],
        tex2jax: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
          processEscapes: true,
        },
        TeX: {
          extensions: [
            "AMSmath.js",
            "AMSsymbols.js",
            "noErrors.js",
            "noUndefined.js",
          ],
        },
      };
    return (
        <View style={styles.mathJaxContainer}>
            <MathJax
              mathJaxOptions={mathJaxOptions}
              html={"$"+props.html+"$"}
            />
        </View>
    );
}

export default DisplayFormula

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: FONTSIZE.giant,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    mathJaxContainer: {
        // backgroundColor: '#FF0000',
        // marginLeft: 70,
        // marginBottom: 20
    }
  })