import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import { Image } from "react-native";

import {
  SuccessContainer,
  SuccessFooter,
  SuccessMessage,
  SuccessWrapper
} from "./styled";

const propTypes = {
  step: PropTypes.number.isRequired
};

export const Success = memo(props => {
  const { step } = props;
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  return (
    <SuccessWrapper visible={step === 4} delay={500}>
      <SuccessContainer>
        <Image source={require("../../assets/img/success.png")} />
        <SuccessMessage fontSize={30} color={theme.color.textPrimary}>
          {t("Successfully!")}
        </SuccessMessage>
        <SuccessMessage>{t("Payment submitted for processing")}</SuccessMessage>
      </SuccessContainer>
      <SuccessFooter>
        <SuccessMessage>{t("Dear Artem!")}</SuccessMessage>
        <SuccessMessage>
          {t("Do you want to add this operation to your templates?")}
        </SuccessMessage>
      </SuccessFooter>
    </SuccessWrapper>
  );
});

Success.propTypes = propTypes;
