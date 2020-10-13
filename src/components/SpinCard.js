import React, { useEffect } from 'react';
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

  const {
    original_title,
    poster_path,
    overview,
    release_date,
    vote_average
  } = useSelector(state => state.selectedMovie);

  useEffect(() => {
    console.log('uEffect');
  }, []);

  return (
    <View>
      <Card wrapperStyle={styles.container}>
        <Card.Title h2>{original_title}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={styles.posterStyle}
          source={{
            uri: `https://image.tmdb.org/t/p/original${poster_path}`
          }}
        />
        <Text style={styles.descriptionStyle}>
          Average score {vote_average}
        </Text>
        <Text style={styles.descriptionStyle}>Released {release_date}</Text>
        <Text style={styles.descriptionStyle}>{overview}</Text>
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
