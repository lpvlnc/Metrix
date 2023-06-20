import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';

type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const formatData = (data: any, numColumns:any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
const renderItem = ({ item, index }: any) => {
  if (item.empty === true) {
    return <View style={[styles.item, styles.itemInvisible]} />;
  }
  return (
    <TouchableOpacity
        style={styles.item}
        onPress={item.onPress}
      >
        <MaterialIcons color={COLORS.primary}
                          name={item.icon}
                          size={36}
                          />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    
  );
};

const MainContent = () => {
  const navigation = useNavigation<MainScreenProp>();
  const data = [
    { icon: 'calculate', title: 'Algebra', onPress: () => {navigation.navigate('MenuAlgebra')}},  { icon: 'bar-chart', title: 'Estatística', onPress: () => {} },
    { icon: 'calculate', title: 'Algebra', onPress: () => {} },  { icon: 'calculate', title: 'Algebra', onPress: () => {} },
    { icon: 'calculate', title: 'Algebra', onPress: () => {} },  { icon: 'calculate', title: 'Algebra', onPress: () => {} },
  ];
  return (
    <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={renderItem}
        numColumns={numColumns}
      />
  )
}

export default MainContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    height: (Dimensions.get('window').width / numColumns) - 50, // approximate a square
    elevation: 2,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    marginTop: 20,
    color: COLORS.primary,
  },
});