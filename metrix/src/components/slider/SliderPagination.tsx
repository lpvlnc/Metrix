import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/colors'
import { SliderItemInterface } from '../../interfaces/SliderItemInterface'

const { width } = Dimensions.get('screen')

type SliderPaginationProps = {
  data: SliderItemInterface[]
  scrollX: any
  index: number
}

const SliderPagination = (props: SliderPaginationProps) => {
  return (
    <View style={styles.container}>
      {
        props.data.map((_, idx) => {
          const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

          const dotWidth = props.scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp'
          });

          const opacity = props.scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.1],
            extrapolate: 'clamp',
          });

          const backgroundColor = props.scrollX.interpolate({
            inputRange,
            outputRange: [COLORS.secondary, COLORS.primary, COLORS.secondary],
            extrapolate: 'clamp',
          });

          return <Animated.View 
                  key={idx.toString()} 
                  style={
                    [
                      styles.dot, 
                      {
                        width: dotWidth,
                        backgroundColor
                        // idx === index && styles.dotActive
                      }
                    ]}/>
        })
      }
    </View>
  )
}

export default SliderPagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: COLORS.primary
  },
  dotActive: {
    backgroundColor: COLORS.secondary,
  },
})