import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpinCard from '../components/SpinCard';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <SpinCard />
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
