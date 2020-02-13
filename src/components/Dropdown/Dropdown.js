import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import { DropdownWrapper } from "./styled";

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    paddingRight: 30
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 0,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderRadius: 0,
    paddingRight: 30
  },
  iconContainer: {
    top: 10,
    right: 0
  }
});

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export const Dropdown = memo(props => {
  const { items, value, onValueChange } = props;
  const theme = useContext(ThemeContext);

  return (
    <DropdownWrapper>
      <RNPickerSelect
        value={value}
        items={items}
        onValueChange={onValueChange}
        placeholder={{}}
        pickerProps={{ mode: "dropdown" }}
        useNativeAndroidPickerStyle={false}
        style={{
          ...pickerSelectStyles,
          inputIOS: {
            ...pickerSelectStyles.inputIOS,
            color: theme.color.textDefault,
            borderBottomColor: theme.color.borderDefault
          },
          inputAndroid: {
            ...pickerSelectStyles.inputAndroid,
            color: theme.color.textDefault,
            borderBottomColor: theme.color.borderDefault,
          },
        }}
        Icon={() => (
          <Icon
            name="ios-arrow-down"
            size={25}
            color={theme.color.iconDefault}
          />
        )}
      />
    </DropdownWrapper>
  );
});

Dropdown.propTypes = propTypes;
