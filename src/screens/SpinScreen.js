import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchableDropdown from '../components/SearchableDropdown';
import {
  generateYearList,
  languageList,
  generateRatingList,
  tempGenreList
} from '../dropdownArrays';

const initialState = {
  language: 'en',
  yearFrom: '1955',
  yearTo: '2020',
  rating: '1',
  genre: '28'
};

const SpinScreen = () => {
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

  const onDropdownChange = ({ label, value }, setStateKey) => {
    setState(prevState => {
      return { ...prevState, [setStateKey]: value };
    });
  };

  useEffect(() => {
    const years = generateYearList();
    setYearList(years);

    const reversedYearList = generateYearList().reverse();
    setYearListReversed(reversedYearList);

    const ratingArray = generateRatingList();
    setRatingList(ratingArray);
  }, []);

  return (
    <>
      <View style={styles.parentContainer}>
        <SearchableDropdown
          itemList={languageList}
          searchPlaceholder="Find a language"
          defaultChoice={language}
          onItemChange={onDropdownChange}
          parentViewStyle={styles.lanaguageContainer}
          labelText="Langauge"
          setStateKey="language"
        />
        <View style={{ flexDirection: 'row', zIndex: 2 }}>
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
        <View style={{ flexDirection: 'row' }}>
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
            itemList={tempGenreList}
            defaultChoice={genre}
            searchPlaceholder="Select genre"
            onItemChange={onDropdownChange}
            parentViewStyle={styles.halfFieldContainer}
            labelText="Genres"
            setStateKey="genre"
          />
        </View>
      </View>
    </>
  );
};

export default SpinScreen;

const styles = StyleSheet.create({
  parentContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    flex: 1
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
  twoFieldContainer: {}
});
