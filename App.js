// React
import React from 'react';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationWrapper';

// Redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';

// Components
import SpinScreen from './src/screens/SpinScreen';
import ResultsScreen from './src/screens/ResultsScreen';

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

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
    <Provider store={store}>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};
