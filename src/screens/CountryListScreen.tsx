
'use strict';

import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { useNavigation, useNavigationParam } from 'react-navigation-hooks';

import { CountryListItem } from '../components';
import { fetchCountries } from '../actions';

export const CountryListScreen = () => {

  const { loading, countries, errorMessage } = useSelector(state => ({
    loading: state.country.loading,
    countries: state.country.countries,
    errorMessage: state.country.errorMessage,
  }), shallowEqual);

  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const goToCityList = (country: any) => {
    navigate('City', { country });
  }

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

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
        data={countries}
        keyExtractor={item => item.code}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight onPress={() => goToCityList(item)}>
              <CountryListItem title={item.name !== undefined ? item.name : item.code} />
            </TouchableHighlight>
          )
        }
        } />
    </SafeAreaView>
  );
}

CountryListScreen.navigationOptions = {
  title: 'Select a Country'
}


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