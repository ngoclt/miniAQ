
import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from '../../actions';

const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

export const CountriesList = () => {

    const loading = useSelector(state => state.loading);
    const errorMessage = useSelector(state => state.errorMessage);
    const countries = useSelector(state => state.countries);

    const dispatch = useDispatch();

    useEffect( () => {
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
                renderItem={({ item }) => <Item title={item.name !== undefined ? item.name : item.code} />} />
        </SafeAreaView>
    );
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
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      title: {
        fontSize: 14,
      },
  })