import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
import {
  ButtonText,
  ButtonWrapper,
  ButtonLeftComponent,
  ButtonRightComponent
} from "./styled";

const propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  leftIconProps: PropTypes.object,
  rightIconProps: PropTypes.object,
  buttonLeftIcon: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired
};

export const Button = memo(props => {
  const {
    leftIconProps,
    children,
    rightIconProps,
    onPress,
    isDisabled,
    buttonLeftIcon
  } = props;
  const theme = useContext(ThemeContext);

  return (
    <ButtonWrapper onPress={onPress} activeOpacity={0.7} isDisabled={isDisabled}>
      <ButtonLeftComponent>
        {buttonLeftIcon && (
          <Image
            source={require("../../assets/img/calendar.png")}
            onPress={onPress}
          />
        )}
      </ButtonLeftComponent>
      <ButtonText>{children}</ButtonText>
      <ButtonRightComponent onPress={onPress}>
        {rightIconProps && <Icon {...rightIconProps} onPress={onPress} />}
      </ButtonRightComponent>
    </ButtonWrapper>
  );
});

Button.propTypes = propTypes;
