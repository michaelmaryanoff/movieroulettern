import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchableDropdown = ({
  searchPlaceholder,
  itemList,
  defaultChoice,
  onItemChange,
  parentViewStyle,
  labelText,
  setStateKey
}) => {
  return (
    <View style={parentViewStyle}>
      <Text style={styles.itemLabel}>{labelText}</Text>
      <DropDownPicker
        searchablePlaceholder={searchPlaceholder}
        searchable
        searchableError={() => <Text>No results</Text>}
        items={itemList}
        defaultValue={defaultChoice}
        onChangeItem={event => {
          console.log(setStateKey);

          onItemChange(event, setStateKey);
        }}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
      />
    </View>
  );
};

export default SearchableDropdown;

const styles = StyleSheet.create({
  itemLabel: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
