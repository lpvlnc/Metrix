import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTSIZE } from '../../constants/fontSize';
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors';
import Divider from '../Divider';

type MenuItemProps = {
    title?: string | undefined;
    onPress?: any;
  };

const MenuItem = (props: MenuItemProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
        <MaterialIcons color={COLORS.textSecondary}
          name='navigate-next'
          size={26}
          style={styles.icon}/>
      </TouchableOpacity>
      <Divider/>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        color: COLORS.textSecondary,
        fontSize: FONTSIZE.normal
    },
    icon: {
        position: 'absolute',
        top: 19,
        right: 12
    }
})