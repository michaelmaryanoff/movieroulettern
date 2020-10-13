// React
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Components
import ResultsCard from '../components/ResultsCard';

const ResultsScreen = () => {
  const isSpinning = useSelector(state => state.isSpinning);

  return (
    <View style={styles.container}>
      {isSpinning ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <ResultsCard />
      )}
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  }
});
