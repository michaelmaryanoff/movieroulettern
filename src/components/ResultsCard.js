// React
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Outside libraries
import { Card, Button, Divider } from 'react-native-elements';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { spinAgain } from '../actions';
import { lightBlue, darkBlue, lightRed } from '../styling/colors';

// Assets
const reelLogoPlaceHolder = require('../images/ReelLogoPlaceholder.jpg');

// Helpers
import { rawDateToString } from '../helpers';

// Dependencies
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';

const initialState = {
  originalTitle: 'Loading...',
  posterPath: '',
  movieOverview: 'Loading...',
  releaseDate: 'Loading...',
  voteAverage: 'Loading...'
};

const ResultsCard = () => {

  const dispatch = useDispatch();
  const windowWidth = useWindowDimensions().width;

  const [
    { originalTitle, posterPath, movieOverview, releaseDate, voteAverage },
    setState
  ] = useState(initialState);

  const selectedMovie = useSelector(state => state.selectedMovie);

  useEffect(() => {
    if (selectedMovie) {
      if (selectedMovie === 'NO_RESULTS') {
        const overview =
          'There were no results for your selection! Please try a different set of parameters and spin again.';
        const original_title = 'Please try again!';
        setState(prevState => {
          return {
            ...prevState,
            originalTitle: original_title,
            posterPath: '',
            movieOverview: overview || '',
            releaseDate: '',
            voteAverage: ''
          };
        });
        return;
      }

      const {
        original_title,
        poster_path,
        overview,
        release_date,
        vote_average
      } = selectedMovie;

      setState(prevState => {
        const formattedDate = rawDateToString(release_date);
        return {
          ...prevState,
          originalTitle: original_title || '',
          posterPath: poster_path || '',
          movieOverview: overview || '',
          releaseDate: `Released: ${formattedDate}` || '',
          voteAverage: `Average score: ${vote_average}` || ''
        };
      });
    }
  }, [selectedMovie]);

  handleSpin = () => {
    dispatch(spinAgain());
  };

  const cardImage = posterPath ? (
    <Card.Image
      style={styles.posterStyle}
      source={{ uri: `https://image.tmdb.org/t/p/original${posterPath}` }}
    />
  ) : (
    <Card.Image style={styles.posterStyle} source={reelLogoPlaceHolder} />
  );

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
            width: windowWidth * 0.9
          }}
        >
          <Card.Title style={styles.headerStyle} h3>
            {originalTitle}
          </Card.Title>
          <Card.Divider style={{ height: 5 }} />
          {cardImage}
          {selectedMovie === 'NO_RESULTS' ? null : (
            <Text style={styles.additionalInfoStyle}>{voteAverage}</Text>
          )}
          {selectedMovie === 'NO_RESULTS' ? null : (
            <Text style={styles.additionalInfoStyle}>{releaseDate}</Text>
          )}
          <Text style={styles.descriptionStyle}>{movieOverview}</Text>
          {selectedMovie === 'NO_RESULTS' ? null : (
            <Button
              onPress={() => {
                handleSpin();
              }}
              buttonStyle={styles.buttonStyle}
              title="Spin again!"
            />
          )}
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
    marginTop: 12,
    color: 'white',
    fontFamily: 'Roboto_700Bold'
  },
  additionalInfoStyle: {
    fontFamily: 'Roboto_400Regular_Italic',
    color: 'white',
    marginTop: 10
  },
  cardContainerStyle: {
    alignItems: 'center',
    backgroundColor: darkBlue,
    borderColor: lightBlue,
    borderWidth: 20,
    borderRadius: 10
  },
  cardWrapperStyle: {
    backgroundColor: darkBlue,
    alignItems: 'center'
  },
  buttonStyle: {
    marginTop: 15,
    marginBottom: 10,
    width: '100%',
    backgroundColor: lightRed
  },
  scrollViewStyle: {
    paddingBottom: 10,
    backgroundColor: darkBlue
  },
  headerStyle: {
    color: 'white',
    fontFamily: 'Roboto_700Bold'
  }
});
