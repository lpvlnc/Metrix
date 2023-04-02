import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Paragraph from '../paragraph/Paragraph'
import { COLORS } from '../../styles/colors';
import { SliderItemInterface } from '../../interfaces/SliderItemInterface';

const { width, height } = Dimensions.get('screen');

type SliderProps = {
  item: SliderItemInterface;
};
const SliderItem = (props: SliderProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{props.item.title}</Text>
      </View>
      <Image style={styles.image}
          source={props.item.image}
          resizeMode='contain'
      />
      <View style={styles.description}>
          <Paragraph text={props.item.description}/>
      </View>
    </View>
  )
}

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width,
    height: height / 2,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  containerTitle: {
    paddingBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  image: {
    width: '100%'
  },
  description: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})