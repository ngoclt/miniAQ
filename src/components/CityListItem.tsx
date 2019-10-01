import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CityListItem = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 14,
  },
});