import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';

const languageArray = [
  {
    key: 'en',
    value: 'en',
    text: 'English'
  },
  {
    key: 'es',
    value: 'es',
    text: 'Spanish'
  },
  {
    key: 'pt',
    value: 'pt',
    text: 'Portuguese'
  },
  {
    key: 'zh',
    value: 'zh',
    text: 'Chinese'
  },
  {
    key: 'fr',
    value: 'fr',
    text: 'French'
  },
  {
    key: 'it',
    value: 'it',
    text: 'Italian'
  },
  {
    key: 'de',
    value: 'de',
    text: 'German'
  },
  {
    key: 'nl',
    value: 'nl',
    text: 'Dutch'
  },
  {
    key: 'sv',
    value: 'sv',
    text: 'Swedish'
  },
  {
    key: 'ru',
    value: 'ru',
    text: 'Russian'
  },
  {
    key: 'hi',
    value: 'hi',
    text: 'Hindi'
  },
  {
    key: 'ja',
    value: 'ja',
    text: 'Japanese'
  },
  {
    key: 'ko',
    value: 'ko',
    text: 'Korean'
  }
];

const SpinScreen = () => {
  const [language, setLanguage] = useState('english');

  const langaugeChange = (itemValue, itemIntex) => {
    setLanguage(itemValue);
  };

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
        <Picker selectedValue={language} onValueChange={langaugeChange}>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
        </Picker>
      </View>
    </>
  );
};

export default SpinScreen;

const styles = StyleSheet.create({});
