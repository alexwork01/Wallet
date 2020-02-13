import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import { Image } from "react-native";

import { PinLabel, PinMessage, PinSection, PinWrapper } from "./styled";
import { CardInput } from "../CardInput";

const propTypes = {
  requestCallback: PropTypes.func
};

export const Pin = memo(props => {
  const { step, requestCallback } = props;
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  return (
    <PinWrapper visible={step === 3} delay={50}>
      <Image source={require("../../assets/img/sheild.png")} />
      <PinSection>
        <PinMessage>{t("smsMessage")}</PinMessage>
        <PinMessage>{t("smsAttension")}</PinMessage>
      </PinSection>
      <PinSection>
        <PinLabel>{t("smsLabel")}</PinLabel>
        <CardInput
          requestCallback={requestCallback}
          isDisabled={false}
          count={4}
          numberOfDigits={1}
        />
      </PinSection>
    </PinWrapper>
  );
});

Pin.propTypes = propTypes;
