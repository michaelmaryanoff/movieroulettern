// React
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Outside libraries
import { Card, Button } from 'react-native-elements';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { spinAgain } from '../actions';

const LoadingCard = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Card wrapperStyle={styles.container}>
        <Card.Title h3>Spinning...</Card.Title>
        <Card.Divider />
        <Card.Image style={styles.posterStyle}>
          <ActivityIndicator size="large" color="blue" />
        </Card.Image>
        <Text style={styles.descriptionStyle}>
          Finding a movie for you to watch!
        </Text>
      </Card>
    </ScrollView>
  );
};

export default LoadingCard;

const styles = StyleSheet.create({
  posterStyle: {
    width: 200,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionStyle: {
    marginTop: 20
  },
  container: {
    alignItems: 'center',
    width: 300,
    height: 500
  },
  buttonStyle: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 1
  },
  scrollView: {
    paddingBottom: 10
  }
});
