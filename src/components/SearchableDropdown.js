import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchableDropdown = ({
  searchPlaceholder,
  itemList,
  defaultChoice,
  onItemChange,
  parentViewStyle,
  labelText,
  setStateKey,
  z,
  control
}) => {
  return (
    <View style={parentViewStyle}>
      <Text style={styles.itemLabel}>{labelText}</Text>
      <View>
        <DropDownPicker
          controller={control}
          searchablePlaceholder={searchPlaceholder}
          searchable
          searchableError={() => <Text>No results</Text>}
          items={itemList}
          defaultValue={defaultChoice}
          onChangeItem={event => {
            onItemChange(event, setStateKey);
          }}
          zIndex={z}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#fafafa' }}
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
    color: 'white'
  }
});
