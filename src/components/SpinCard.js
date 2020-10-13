import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const reelLogoPlaceHolder = require('../images/ReelLogoPlaceholder.jpg');

const initialState = {
  originalTitle: 'Loading...',
  // TODO: this will need to be a path to a placeholder
  posterPath: '',
  movieOverview: 'Loading...',
  releaseDate: 'Loading...',
  voteAverage: 'Loading...'
};

const SpinCard = () => {
  const [
    { originalTitle, posterPath, movieOverview, releaseDate, voteAverage },
    setState
  ] = useState(initialState);

  const selectedMovie = useSelector(state => state.selectedMovie);
  console.log('selectedMovie: ', selectedMovie);

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

  const cardImage = posterPath ? (
    <Card.Image style={styles.posterStyle} source={{ uri: posterPath }} />
  ) : (
    <Card.Image style={styles.posterStyle} source={reelLogoPlaceHolder} />
  );

  return (
    <ScrollView>
      <Card wrapperStyle={styles.container}>
        <Card.Title h3>{originalTitle}</Card.Title>
        <Card.Divider />
        {cardImage}
        <Text style={styles.descriptionStyle}>Average score {voteAverage}</Text>
        <Text style={styles.descriptionStyle}>Released {releaseDate}</Text>
        <Text style={styles.descriptionStyle}>{movieOverview}</Text>
      </Card>
    </ScrollView>
  );
};

export default SpinCard;

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
  }
});
