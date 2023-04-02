import { View, Text, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { SliderItemInterface } from '../../interfaces/SliderItemInterface';
import SliderItem from './SliderItem';
import SliderPagination from './SliderPagination';

type SliderProps = {
  items: SliderItemInterface[];
};

const Slider = (props: SliderProps) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={props.items}
        renderItem={({ item }) => <SliderItem item={item}/>}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <SliderPagination data={props.items} scrollX={scrollX} index={index}/>
    </View>
  )
}

export default Slider;