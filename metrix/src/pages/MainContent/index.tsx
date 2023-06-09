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
        {item.icon && item.icon != 'relativity' &&
          <MaterialIcons color={COLORS.primary}
                         name={item.icon}
                         size={36}
                         />
        }
        {item.icon && item.icon == 'relativity' &&
          <Text style={styles.emc}>E=mc</Text>
        }
        {item.icon && item.icon == 'relativity' &&
          <Text style={styles.emc2}>2</Text>
        }
        <Text style={[styles.itemText, !item.icon && { top: 20}]}>{item.title}</Text>
      </TouchableOpacity>
  );
};

const MainContent = () => {
  const navigation = useNavigation<MainScreenProp>();
  const data = [
    { icon: 'calculate', title: 'Álgebra', onPress: () => {navigation.navigate('MenuAlgebra')} },  { icon: 'bar-chart', title: 'Estatística', onPress: () => {navigation.navigate('MenuStatistic')} },
    { icon: 'change-history', title: 'Geometria', onPress: () => {navigation.navigate('MenuGeometry')} }, { icon: 'relativity', title: 'Física', onPress: () => {navigation.navigate('MenuPhysics')} }
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
    borderRadius: 15,
  },
  itemInvisible: {
    backgroundColor: COLORS.white,
    elevation: 0
  },
  itemText: {
    marginTop: 20,
    color: COLORS.primary,
  },
  emc: {
    marginTop: 5,
    color: COLORS.primary,
    fontSize: 26,
    fontWeight: 'bold'
  },
  emc2: {
    position: 'absolute',
    right: 46,
    top: 40,
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold'
  }
});