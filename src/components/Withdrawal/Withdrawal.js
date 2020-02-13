import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import { Switch } from "react-native";

import { useMatrics } from "../../config/metrics";
import {
  WithdrawalAmount,
  WithdrawalContainer,
  WithdrawalCurrency,
  WithdrawalInput,
  WithdrawalLabel,
  WithdrawalSection,
  WithdrawalType,
  WithdrawalWrapper
} from "./styled";
import { CardInput } from "../CardInput";

const propTypes = {
  step: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired,
  amount: PropTypes.string.isRequired,
  toCard: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  isConfirm: PropTypes.bool,
  commission: PropTypes.number.isRequired,
  transferType: PropTypes.number.isRequired,
  handleIsConfirm: PropTypes.func.isRequired,
  handleInputAmount: PropTypes.func.isRequired
};

export const Withdrawal = memo(props => {
  const {
    step,
    types,
    amount,
    toCard,
    currency,
    isConfirm,
    commission,
    transferType,
    handleInputAmount,
    handleIsConfirm
  } = props;
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const { platformOS } = useMatrics();

  const validate = text => {
    const regexpA = /[^\d.]/g;
    const regexpB = /(\d{0,}\.{0,1}\d{0,2})/;

    const clearText = text.replace(regexpA, "");

    const [match] = regexpB.exec(clearText);

    return match[0] === "." ? `0${match}` : match;
  };

  const handleChangeText = text => {
    const validatedText = validate(text);
    handleInputAmount(validatedText);
  };

  const getcommission = () => {
    const result = Math.round(parseFloat(amount) * commission * 100) / 100;

    return isNaN(result) ? "0.00" : result.toFixed(2);
  };

  const transfer = types[transferType].label;

  return (
    <WithdrawalWrapper visible={step === 2} delay={500}>
      <WithdrawalType>{transfer}</WithdrawalType>
      <WithdrawalSection>
        <CardInput initialValue={toCard} isDisabled />
      </WithdrawalSection>
      <WithdrawalAmount>
        <WithdrawalInput
          value={amount}
          onChangeText={handleChangeText}
          keyboardType="numeric"
          autoCompleteType="off"
          maxLength={8}
          placeholder="0.00"
          autoFocus={false}
        />
        <WithdrawalCurrency>{t("UAH")}</WithdrawalCurrency>
      </WithdrawalAmount>
      <WithdrawalContainer>
        <WithdrawalLabel>
          {t("Pay recipient fee")} {getcommission()} {t(currency)}?
        </WithdrawalLabel>
        <Switch
          trackColor={{
            true: theme.color.blueLight,
            false:
              platformOS === "android"
                ? theme.color.switchPrimary
                : theme.color.switchDefault
          }}
          thumbColor={[
            // eslint-disable-next-line no-nested-ternary
            platformOS === "ios"
              ? theme.color.white
              : isConfirm
              ? theme.color.switchDefault
              : theme.color.white
          ]}
          ios_backgroundColor={theme.color.switchDefault}
          value={isConfirm}
          onValueChange={() => handleIsConfirm(!isConfirm)}
        />
      </WithdrawalContainer>
    </WithdrawalWrapper>
  );
});

Withdrawal.propTypes = propTypes;
