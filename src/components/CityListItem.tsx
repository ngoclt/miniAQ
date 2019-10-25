import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../themes';

export const CityListItem = ({ title }) => {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 75,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  flag: {
    marginRight: 20,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.title,
    textTransform: 'uppercase',
    flexShrink: 1
  },
});