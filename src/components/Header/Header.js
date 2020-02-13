import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";

import { useMatrics } from "../../config/metrics";
import {
  HeaderWrapper,
  HeaderText,
  HeaderLeftComponent,
  HeaderCenterComponent,
  HeaderRightComponent
} from "./styled";

const propTypes = {
  leftIconProps: PropTypes.object,
  leftText: PropTypes.string,
  centerText: PropTypes.string,
  onLeftPress: PropTypes.func,
  onCenterPress: PropTypes.func,
  onRightPress: PropTypes.func
};

const defaultProps = {
  onLeftPress: () => {},
  onCenterPress: () => {},
  onRightPress: () => {}
};

export const Header = memo(props => {
  const {
    leftIconProps,
    leftText,
    centerText,
    onLeftPress,
    onCenterPress,
    onRightPress
  } = props;
  const { navBarHeight, statusBarHeight } = useMatrics();
  const theme = useContext(ThemeContext);

  const renderLeftComponent = () => {
    return (
      <HeaderLeftComponent onPress={onLeftPress}>
        {leftIconProps && <Icon {...leftIconProps} />}
        <HeaderText>{leftText}</HeaderText>
      </HeaderLeftComponent>
    );
  };

  const renderCenterComponent = () => {
    return (
      <HeaderCenterComponent onPress={onCenterPress}>
        <HeaderText>{centerText}</HeaderText>
      </HeaderCenterComponent>
    );
  };

  const renderRightComponent = () => {
    return (
      <HeaderRightComponent onPress={onRightPress}>
        <Image source={require("../../assets/img/bell.png")} />
      </HeaderRightComponent>
    );
  };

  return (
    <HeaderWrapper height={navBarHeight} statusBarHeight={statusBarHeight}>
      {renderLeftComponent()}
      {renderCenterComponent()}
      {renderRightComponent()}
    </HeaderWrapper>
  );
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
