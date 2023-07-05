import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { FONTSIZE } from '../../constants/fontSize'


const ProblemResult = (props?: ChatGPTResult) => {
  return (
    <View>
        {props?.result && !props.solved &&
        <View>
            <Text style={styles.invalidResult}>Não foi possível obter o resultado da equação. Revise os dados e tente novamente.</Text>
        </View>
        }

        {props?.solved && props?.steps?.map((step, index) => {
            return (
                <Text style={styles.step}><Text style={styles.counter}>{index += 1}) </Text>{step}</Text>
            )})
        }

        {props?.result && props?.solved &&
            <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Resultado: <Text style={styles.result}>{props.result}</Text></Text>
            </View>
        }
    </View>
  )
}

export default ProblemResult

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    counter: {
        color: COLORS.primary,
    },
    step: {
        color: COLORS.textPrimary,
        fontSize: FONTSIZE.normal,
        marginBottom: 10,
    },
    resultTitle: {
        color: COLORS.primary,
        fontSize: FONTSIZE.big,
    },
    resultContainer: {
        marginTop: 10,
    },
    result: {
        color: COLORS.textPrimary,
        fontSize: FONTSIZE.big,
        textDecorationLine: 'underline',
    },
    invalidResult: {
        color: COLORS.textPrimary,
        fontSize: FONTSIZE.normal
    },
})