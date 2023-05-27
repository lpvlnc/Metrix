import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Paragraph from '../Paragraph'
import { COLORS } from '../../styles/colors';
import { SliderItemInterface } from '../../interfaces/SliderItemInterface';
import Title from '../Title';

const { width, height } = Dimensions.get('screen');

type SliderProps = {
  item: SliderItemInterface;
};
const SliderItem = (props: SliderProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Title text={props.item.title}></Title>
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
    paddingHorizontal: 20
  },
  containerTitle: {
    paddingBottom: 40
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