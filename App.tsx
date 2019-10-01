import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';

import store from './src/store';
import { CountryListScreen, CityListScreen } from './src/screens';

const MainNavigator = createStackNavigator({
  Country: { screen: CountryListScreen },
  City: { screen: CityListScreen },
});

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}