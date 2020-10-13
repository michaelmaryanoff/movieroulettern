import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResultsCard from '../components/ResultsCard';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <ResultsCard />
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
