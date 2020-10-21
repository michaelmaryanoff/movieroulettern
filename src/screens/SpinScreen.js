// React
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { Button } from 'react-native-elements';

// Components and constants
import SearchableDropdown from '../components/SearchableDropdown';
import {
  generateYearList,
  languageList,
  generateRatingList,
  initialGenreList
} from '../dropdownHelpers';
import { lightRed, lightBlue } from '../styling/colors';

// Dependencies
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { submitSpin, getGenreCodes, touchOutside } from '../actions';
import { AppLoading } from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  const [shouldDisplayDropdown, setShouldDisplayDropdown] = useState(false);

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

  const dropDownRef = React.useRef();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          dropDownRef.current.close();
        }}
        accessible={false}
      >
        <View style={styles.parentContainer}>
          <View style={styles.formContainer}>
            <View style={{ zIndex: 4 }}>
              <SearchableDropdown
                control={instance => (dropDownRef.current = instance)}
                itemList={languageList}
                searchPlaceholder="Find a language"
                defaultChoice={language}
                onItemChange={onDropdownChange}
                parentViewStyle={styles.lanaguageContainer}
                labelText="Langauge"
                setStateKey="language"
                displayDropdown={shouldDisplayDropdown}
                keyboardType="default"
                searchable={true}
              />
            </View>
            <View style={{ flexDirection: 'row', zIndex: 3 }}>
              <SearchableDropdown
                control={instance => (dropDownRef.current = instance)}
                itemList={yearList}
                defaultChoice={yearFrom}
                searchPlaceholder="Year From"
                onItemChange={(event, setStateKey) =>
                  onDropdownChange(event, setStateKey)
                }
                parentViewStyle={styles.halfFieldContainer}
                labelText="From"
                setStateKey="yearFrom"
                keyboardType="numeric"
                searchable={true}
              />
              <SearchableDropdown
                control={instance => (dropDownRef.current = instance)}
                itemList={yearListReversed}
                defaultChoice={yearTo}
                searchPlaceholder="Year To"
                onItemChange={onDropdownChange}
                parentViewStyle={styles.halfFieldContainer}
                labelText="To"
                setStateKey="yearTo"
                keyboardType="numeric"
                searchable={true}
              />
            </View>
            <View style={{ flexDirection: 'row', zIndex: 2 }}>
              <SearchableDropdown
                control={instance => (dropDownRef.current = instance)}
                itemList={ratingList}
                defaultChoice={rating}
                searchPlaceholder="Minimum rating"
                onItemChange={(event, setStateKey) =>
                  onDropdownChange(event, setStateKey)
                }
                parentViewStyle={styles.halfFieldContainer}
                labelText="Rating"
                setStateKey="rating"
                keyboardType="default"
                searchable={false}
              />
              <SearchableDropdown
                control={instance => (dropDownRef.current = instance)}
                itemList={genreList}
                defaultChoice={genre}
                searchPlaceholder="Select genre"
                onItemChange={onDropdownChange}
                parentViewStyle={styles.halfFieldContainer}
                labelText="Genres"
                setStateKey="genre"
                keyboardType="default"
                searchable={false}
              />
            </View>
            <Button
              onPress={handleSpin}
              style={styles.buttonStyle}
              buttonStyle={{
                backgroundColor: lightRed,
                fontFamily: 'Roboto_900Black_Italic'
              }}
              title="Spin"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
