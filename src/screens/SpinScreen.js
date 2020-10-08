import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchableDropdown from '../components/SearchableDropdown';
import { generateYearList, languageList } from '../dropdownArrays';

const initialState = {
  yearFrom: '1955',
  yearTo: '2020'
};

const SpinScreen = () => {
  const [language, setLanguage] = useState('en');
  const [yearFrom, setYearFrom] = useState(initialState.yearFrom);
  const [yearTo, setYearTo] = useState(initialState.yearTo);

  const [yearList, setYearList] = useState([
    { label: yearFrom, value: yearFrom }
  ]);
  const [yearListReversed, setYearListReversed] = useState([
    { label: yearTo, value: yearTo }
  ]);

  const languageChange = (event, setStateKey) => {
    console.log('event: ', event);
  };

  useEffect(() => {
    const years = generateYearList();
    setYearList(years);
    const reversedYearList = generateYearList().reverse();
    setYearListReversed(reversedYearList);
  }, []);

  return (
    <>
      <View style={styles.parentContainer}>
        <SearchableDropdown
          itemList={languageList}
          searchPlaceholder="Find a language"
          defaultChoice={language}
          onItemChange={languageChange}
          parentViewStyle={styles.lanaguageContainer}
          labelText="Langauge"
          setStateKey="setLanguage"
        />
        <View style={{ flexDirection: 'row' }}>
          <SearchableDropdown
            itemList={yearList}
            defaultChoice={yearFrom}
            searchPlaceholder="Year From"
            onItemChange={(event, setStateKey) =>
              languageChange(event, setStateKey)
            }
            parentViewStyle={styles.halfFieldContainer}
            labelText="From"
            setStateKey="setYearFrom"
          />
          <SearchableDropdown
            itemList={yearListReversed}
            defaultChoice={yearTo}
            searchPlaceholder="Year To"
            onItemChange={languageChange}
            parentViewStyle={styles.halfFieldContainer}
            labelText="To"
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
    marginRight: 20
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
