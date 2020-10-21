import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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

const SearchableDropdown = ({
  searchPlaceholder,
  itemList,
  defaultChoice,
  onItemChange,
  parentViewStyle,
  labelText,
  setStateKey,
  z,
  control,
  keyboardType,
  searchable
}) => {
  let [fontsLoaded] = useFonts({
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
  });
  console.log('defaultChoice: ', defaultChoice);

  return (
    <View style={parentViewStyle}>
      <Text style={styles.itemLabel}>{labelText}</Text>
      <View>
        <DropDownPicker
          controller={control}
          searchablePlaceholder={searchPlaceholder}
          searchable={searchable}
          searchableError={() => <Text>No results</Text>}
          items={itemList}
          defaultValue={defaultChoice}
          onChangeItem={event => {
            onItemChange(event, setStateKey);
          }}
          zIndex={z}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#fafafa' }}
          autoScrollToDefaultValue
          searchTextInputProps={{ keyboardType }}
        />
      </View>
    </View>
  );
};

export default SearchableDropdown;

const styles = StyleSheet.create({
  itemLabel: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto_500Medium'
  }
});
