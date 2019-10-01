import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';

export const CityListScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome to City List screen.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})