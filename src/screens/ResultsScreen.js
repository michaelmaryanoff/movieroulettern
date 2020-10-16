// React
import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import ResultsCard from '../components/ResultsCard';
import LoadingCard from '../components/LoadingCard';

// Constants
import { darkBlue, lightBlue } from '../styling/colors';

const ResultsScreen = () => {
  const isSpinning = useSelector(state => state.isSpinning);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {isSpinning ? <LoadingCard /> : <ResultsCard />}
    </View>
  );
};

ResultsScreen.navigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: darkBlue,
    borderColor: darkBlue,
    borderBottomWidth: 0,
    borderWidth: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },
  headerTintColor: 'white'
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: darkBlue
  }
});
