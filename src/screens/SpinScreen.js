import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchableDropdown from '../components/SearchableDropdown';

const languageList = [
  {
    key: 'en',
    value: 'en',
    label: 'English'
  },
  {
    key: 'es',
    value: 'es',
    label: 'Spanish'
  },
  {
    key: 'pt',
    value: 'pt',
    label: 'Portuguese'
  },
  {
    key: 'zh',
    value: 'zh',
    label: 'Chinese'
  },
  {
    key: 'fr',
    value: 'fr',
    label: 'French'
  },
  {
    key: 'it',
    value: 'it',
    label: 'Italian'
  },
  {
    key: 'de',
    value: 'de',
    label: 'German'
  },
  {
    key: 'nl',
    value: 'nl',
    label: 'Dutch'
  },
  {
    key: 'sv',
    value: 'sv',
    label: 'Swedish'
  },
  {
    key: 'ru',
    value: 'ru',
    label: 'Russian'
  },
  {
    key: 'hi',
    value: 'hi',
    label: 'Hindi'
  },
  {
    key: 'ja',
    value: 'ja',
    label: 'Japanese'
  },
  {
    key: 'ko',
    value: 'ko',
    label: 'Korean'
  }
];

const SpinScreen = () => {
  const [language, setLanguage] = useState('en');

  const languageChange = ({ label, value }) => {
    setLanguage(value);
  };

  return (
    <>
      <View style={styles.parentContainer}>
        <SearchableDropdown
          items={languageList}
          searchablePlaceholder="Find a language"
          items={languageList}
          defaultValue={language}
          onChangeItem={languageChange}
          parentViewStyle={styles.lanaguageContainer}
          labelText="Langauge"
        />
        <SearchableDropdown
          items={languageList}
          searchablePlaceholder="Find a language"
          items={languageList}
          defaultValue={language}
          onChangeItem={languageChange}
          parentViewStyle={styles.lanaguageContainer}
          labelText="Langauge"
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
