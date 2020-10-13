import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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
          posterPath: poster_path || '',
          movieOverview: overview || '',
          releaseDate: release_date || '',
          voteAverage: vote_average || ''
        };
      });
    }
  }, [selectedMovie]);

  return (
    <View>
      <Card wrapperStyle={styles.container}>
        <Card.Title h2>{originalTitle}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={styles.posterStyle}
          source={{
            uri: `https://image.tmdb.org/t/p/original${posterPath}`
          }}
        />
        <Text style={styles.descriptionStyle}>Average score {voteAverage}</Text>
        <Text style={styles.descriptionStyle}>Released {releaseDate}</Text>
        <Text style={styles.descriptionStyle}>{movieOverview}</Text>
      </Card>
    </View>
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
    alignItems: 'center'
  }
});
