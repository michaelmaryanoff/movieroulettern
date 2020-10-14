// React
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Outside libraries
import { Card, Button } from 'react-native-elements';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { spinAgain } from '../actions';
import { lightBlue, darkBlue, lightRed } from '../styling/colors';

// Assets
const reelLogoPlaceHolder = require('../images/ReelLogoPlaceholder.jpg');

const initialState = {
  originalTitle: 'Loading...',
  posterPath: '',
  movieOverview: 'Loading...',
  releaseDate: 'Loading...',
  voteAverage: 'Loading...'
};

const ResultsCard = () => {
  const dispatch = useDispatch();

  const [
    { originalTitle, posterPath, movieOverview, releaseDate, voteAverage },
    setState
  ] = useState(initialState);

  const selectedMovie = useSelector(state => state.selectedMovie);

  useEffect(() => {
    if (selectedMovie) {
      const {
        original_title,
        poster_path,
        overview,
        release_date,
        vote_average
      } = selectedMovie;

      setState(prevState => {
        return {
          ...prevState,
          originalTitle: original_title || '',
          posterPath: `https://image.tmdb.org/t/p/original${poster_path}` || '',
          movieOverview: overview || '',
          releaseDate: release_date || '',
          voteAverage: vote_average || ''
        };
      });
    }
  }, [selectedMovie]);

  handleSpin = () => {
    dispatch(spinAgain());
  };

  const cardImage = posterPath ? (
    <Card.Image style={styles.posterStyle} source={{ uri: posterPath }} />
  ) : (
    <Card.Image style={styles.posterStyle} source={reelLogoPlaceHolder} />
  );

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
          containerStyle={styles.cardContainerStyle}
        >
          <Card.Title style={styles.headerStyle} h3>
            {originalTitle}
          </Card.Title>
          <Card.Divider />
          {cardImage}
          <Text style={styles.descriptionStyle}>
            Average score {voteAverage}
          </Text>
          <Text style={styles.descriptionStyle}>Released {releaseDate}</Text>
          <Text style={styles.descriptionStyle}>{movieOverview}</Text>
          <Button
            onPress={() => {
              handleSpin();
            }}
            buttonStyle={{
              marginTop: 10,
              marginBottom: 10,
              width: '100%',
              backgroundColor: lightRed
            }}
            title="Spin again!"
          />
        </Card>
      </ScrollView>
    </View>
  );
};

export default ResultsCard;

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
    borderWidth: 20
  },
  cardWrapperStyle: {
    backgroundColor: darkBlue,
    borderColor: 'orange',
    alignItems: 'center'
  },
  buttonStyle: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 1
  },
  scrollViewStyle: {
    paddingBottom: 10,
    backgroundColor: darkBlue
  },
  headerStyle: {
    color: 'white'
  }
});
