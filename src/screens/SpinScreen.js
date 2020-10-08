import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';

const languageArray = [
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
  const [language, setLanguage] = useState('english');

  const languageChange = (itemValue, itemIntex) => {
    setLanguage(itemValue);
  };

  const languagePickerItems = () => {
    return languageArray.map(({ value, label }) => {
      return <Picker.Item label={label} value={value} key={value} />;
    });
  };

  console.log('language: ', language);

  return (
    <>
      <Text>SpinScreen</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'red',
          borderRadius: 4,
          width: '50%'
        }}
      >
        <Picker selectedValue={language} onValueChange={languageChange}>
          {languagePickerItems()}
        </Picker>
      </View>
    </>
  );
};

export default SpinScreen;

const styles = StyleSheet.create({});
