// React
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Outside libraries
import { Card, Button } from 'react-native-elements';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { spinAgain } from '../actions';

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
    <ScrollView style={styles.scrollView}>
      <Card wrapperStyle={styles.container}>
        <Card.Title h3>{originalTitle}</Card.Title>
        <Card.Divider />
        {cardImage}
        <Text style={styles.descriptionStyle}>Average score {voteAverage}</Text>
        <Text style={styles.descriptionStyle}>Released {releaseDate}</Text>
        <Text style={styles.descriptionStyle}>{movieOverview}</Text>
        <Button
          onPress={() => {
            handleSpin();
          }}
          buttonStyle={{
            marginTop: 10,
            marginBottom: 10,
            width: '100%'
          }}
          title="Spin again!"
        />
      </Card>
    </ScrollView>
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
    marginTop: 20
  },
  container: {
    alignItems: 'center',
    width: 300
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
