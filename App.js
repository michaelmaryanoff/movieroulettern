import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SpinScreen from './src/screens/SpinScreen';
import ResultsScreen from './src/screens/ResultsScreen';

import { setNavigator } from './src/navigationWrapper';

const navigator = createStackNavigator(
  {
    Spin: SpinScreen,
    Results: ResultsScreen
  },
  {
    initialRouteName: 'Spin',
    deaultNavigationOptions: {
      title: 'Spin'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <App
      ref={navigator => {
        setNavigator(navigator);
      }}
    />
  );
};
