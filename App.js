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

// Expo
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';

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
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
  });
  return (
    <Provider store={store}>
      {fontsLoaded ? (
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      ) : (
        <AppLoading />
      )}
    </Provider>
  );
};
