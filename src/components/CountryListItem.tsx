import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../themes';

export const CountryListItem = ({ code, title }) => {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <View style={styles.flag}>
          <Image style={styles.image} source={{ uri: 'https://www.countryflags.io/' + code + '/flat/64.png' }} />
        </View>
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