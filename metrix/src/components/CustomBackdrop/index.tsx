import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

const CustomBackdrop = ({animatedIndex, style}: BottomSheetBackdropProps) => {
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: 0.8
    }))

    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: 'black',
                opacity: 1
            },
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    )
  return (
    <Animated.View style={containerStyle}/>
  )
}

export default CustomBackdrop

const styles = StyleSheet.create({})