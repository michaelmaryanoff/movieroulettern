import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SpinScreen from './src/screens/SpinScreen';
import ResultsScreen from './src/screens/ResultsScreen';

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

export default createAppContainer(navigator);
