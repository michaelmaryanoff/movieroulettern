import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchableDropdown from '../components/SearchableDropdown';
import { generateYearList, languageList } from '../dropdownArrays';

const tempLangList = [
  {
    value: '1920',
    label: '1920'
  },
  {
    value: '1921',
    label: '1921'
  },
  {
    value: '1922',
    label: '1922'
  }
];

const SpinScreen = () => {
  const [language, setLanguage] = useState('en');
  const [yearList, setYearList] = useState([]);
  const [yearFrom, setYearFrom] = useState('1920');

  const languageChange = ({ label, value }) => {
    // setLanguage(value);
  };

  useEffect(() => {
    const years = generateYearList();
    setYearList(years);
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
          z={200}
        />
        <SearchableDropdown
          itemList={tempLangList}
          defaultChoice="1920"
          searchPlaceholder="Year From"
          onItemChange={languageChange}
          parentViewStyle={styles.lanaguageContainer}
          labelText="From"
        />
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
  }
});
