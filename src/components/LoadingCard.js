// React
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  useWindowDimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Outside libraries
import { Card } from 'react-native-elements';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { spinAgain } from '../actions';

// Constants

import { darkBlue, lightBlue, lightRed } from '../styling/colors';

const LoadingCard = () => {
  const windwoWidth = useWindowDimensions().width;
  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
        style={styles.scrollViewStyle}
      >
        <Card
          wrapperStyle={styles.cardWrapperStyle}
          containerStyle={{
            ...styles.cardContainerStyle,
            width: windwoWidth * 0.9
          }}
        >
          <Card.Title style={styles.headerStyle} h3>
            Spinning...
          </Card.Title>
          <Card.Divider />
          <Card.Image style={styles.posterStyle}>
            <ActivityIndicator size="large" color={lightBlue} />
          </Card.Image>
          <Text style={styles.descriptionStyle}>
            Finding a movie for you to watch!
          </Text>
        </Card>
      </ScrollView>
    </View>
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
    marginTop: 20,
    color: 'white'
  },
  cardContainerStyle: {
    alignItems: 'center',
    width: 400,
    backgroundColor: darkBlue,
    borderColor: lightBlue,
    borderWidth: 20,
    borderRadius: 10,
    height: 600
  },
  cardWrapperStyle: {
    backgroundColor: darkBlue,
    borderColor: 'orange',
    alignItems: 'center'
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: lightRed
  },
  scrollViewStyle: {
    paddingBottom: 10,
    backgroundColor: darkBlue
  },
  headerStyle: {
    color: 'white'
  }
});
