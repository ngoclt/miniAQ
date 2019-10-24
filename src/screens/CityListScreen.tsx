'use strict';

import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { useNavigation, useNavigationParam, } from 'react-navigation-hooks';

import { CityListItem } from '../components';
import { fetchCities } from '../actions';
import { COLORS } from '../themes';

export const CityListScreen = () => {

  const country = useNavigationParam('country');

  const { loading, cities, errorMessage } = useSelector(state => ({
    loading: state.city.loading,
    cities: state.city.cities,
    errorMessage: state.city.errorMessage,
  }), shallowEqual);

  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  useEffect(() => {
    dispatch(fetchCities(country.code));
  }, []);

  const goToCityList = (country: any) => {

  }

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (errorMessage.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.instructions}>{errorMessage}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cities}
        keyExtractor={(item, index) => item.index}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight onPress={() => goToCityList(item)}>
              <CityListItem title={item.name !== undefined ? item.name : item.code} />
            </TouchableHighlight>
          )
        }
        } />
    </SafeAreaView>
  );
}

CityListScreen.navigationOptions = ({ navigation }) => {
  const country = navigation.getParam('country');
  const name = country.name;
  return {
    title: 'Select a City in ' + name,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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