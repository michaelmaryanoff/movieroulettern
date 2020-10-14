// React
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

// Components and constants
import SearchableDropdown from '../components/SearchableDropdown';
import {
  generateYearList,
  languageList,
  generateRatingList,
  initialGenreList
} from '../dropdownArrays';
import { lightRed, lightBlue } from '../styling/colors';

// Dependencies
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { submitSpin, getGenreCodes } from '../actions';

const initialState = {
  language: 'en',
  yearFrom: '1955',
  yearTo: '2020',
  rating: '1',
  genre: ''
};

const SpinScreen = ({ navigation }) => {
  /**
   * Redux State
   */
  const dispatch = useDispatch();
  const genreCodes = useSelector(state => state.genreCodes);

  /**
   * Component State
   */
  const [{ language, yearFrom, yearTo, rating, genre }, setState] = useState(
    initialState
  );
  const [yearList, setYearList] = useState([
    { label: yearFrom, value: yearFrom }
  ]);
  const [yearListReversed, setYearListReversed] = useState([
    { label: yearTo, value: yearTo }
  ]);
  const [ratingList, setRatingList] = useState([
    { label: '1 / 10', value: rating }
  ]);
  const [genreList, setGenreList] = useState(initialGenreList);

  /**
   * Input handlers
   */
  const onDropdownChange = ({ value }, setStateKey) => {
    setState(prevState => {
      return { ...prevState, [setStateKey]: value };
    });
  };

  handleSpin = () => {
    const submissionObject = {
      yearFrom,
      yearTo,
      rating,
      genre,
      language
    };
    dispatch(submitSpin(submissionObject));
    navigation.navigate('Results');
  };

  /**
   * Lifecycle functions
   */

  useEffect(() => {
    const years = generateYearList();
    setYearList(years);

    const reversedYearList = generateYearList().reverse();
    setYearListReversed(reversedYearList);

    const ratingArray = generateRatingList();
    setRatingList(ratingArray);

    dispatch(getGenreCodes());
  }, []);

  useEffect(() => {
    if (genreCodes) {
      setGenreList(genreCodes);
    }
  }, [genreCodes]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.parentContainer}>
        <View style={styles.formContainer}>
          <View style={{ zIndex: 4 }}>
            <SearchableDropdown
              itemList={languageList}
              searchPlaceholder="Find a language"
              defaultChoice={language}
              onItemChange={onDropdownChange}
              parentViewStyle={styles.lanaguageContainer}
              labelText="Langauge"
              setStateKey="language"
            />
          </View>
          <View style={{ flexDirection: 'row', zIndex: 3 }}>
            <SearchableDropdown
              itemList={yearList}
              defaultChoice={yearFrom}
              searchPlaceholder="Year From"
              onItemChange={(event, setStateKey) =>
                onDropdownChange(event, setStateKey)
              }
              parentViewStyle={styles.halfFieldContainer}
              labelText="From"
              setStateKey="yearFrom"
            />
            <SearchableDropdown
              itemList={yearListReversed}
              defaultChoice={yearTo}
              searchPlaceholder="Year To"
              onItemChange={onDropdownChange}
              parentViewStyle={styles.halfFieldContainer}
              labelText="To"
              setStateKey="yearTo"
            />
          </View>
          <View style={{ flexDirection: 'row', zIndex: 2 }}>
            <SearchableDropdown
              itemList={ratingList}
              defaultChoice={rating}
              searchPlaceholder="Minimum rating"
              onItemChange={(event, setStateKey) =>
                onDropdownChange(event, setStateKey)
              }
              parentViewStyle={styles.halfFieldContainer}
              labelText="Rating"
              setStateKey="rating"
            />
            <SearchableDropdown
              itemList={genreList}
              defaultChoice={genre}
              searchPlaceholder="Select genre"
              onItemChange={onDropdownChange}
              parentViewStyle={styles.halfFieldContainer}
              labelText="Genres"
              setStateKey="genre"
            />
          </View>
          <Button
            onPress={handleSpin}
            style={styles.buttonStyle}
            buttonStyle={{ backgroundColor: lightRed }}
            title="Spin"
          />
        </View>
      </View>
    </>
  );
};

SpinScreen.navigationOptions = () => {
  return {
    header: () => false
  };
};

export default withNavigation(SpinScreen);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: lightBlue
  },
  formContainer: {
    marginTop: 100
  },
  lanaguageContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 3
  },
  fullFieldContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  },
  halfFieldContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: 100,
    flexGrow: 1
  },
  buttonStyle: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 1,
    color: lightRed
  }
});
