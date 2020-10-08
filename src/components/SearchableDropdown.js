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
  z
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
        onChangeItem={onItemChange}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        zIndex={z}
      />
    </View>
  );
};

export default SearchableDropdown;

const styles = StyleSheet.create({
  fullWidthContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  },
  itemLabel: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
