import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import { Text } from "react-native";

import { ComponentWrapper } from "./styled";

const propTypes = {};

const defaultProps = {};

export const Component = memo(props => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  return (
    <ComponentWrapper>
      <Text>Component</Text>
    </ComponentWrapper>
  );
});

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
