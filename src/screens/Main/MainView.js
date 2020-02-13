import React, { useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ImageBackground,
  Picker,
  TextInput
} from "react-native";

import { reducer, initialState } from "../../store/configureStore";
import {
  Pin,
  Card,
  Header,
  Button,
  Footer,
  Success,
  Dropdown,
  CardInput,
  Withdrawal
} from "../../components";
import {
  actionGoNext,
  actionGoBack,
  actionSetTransferPin,
  actionSetTransferType,
  actionSetTransferCard,
  actionSetTransferAmount,
  actionSetTransferIsConfirm
} from "../../store/actions";
import {
  Body,
  Wrapper,
  Container,
  InputSection,
  DropdownSection
} from "./styled";

export const MainView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { step, transfer, pageProps, isComplete } = state;
  const {
    leftText,
    leftIconName,
    centerText,
    buttonText,
    buttonLeftIcon,
    buttonRightIcon
  } = pageProps;

  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  const goNext = () => isComplete && dispatch(actionGoNext());
  const goBack = () => dispatch(actionGoBack());
  const changeTransferType = value => dispatch(actionSetTransferType(value));

  const handleInputCard = value => {
    dispatch(actionSetTransferCard(value));
  };

  const handleInputAmount = value => {
    dispatch(actionSetTransferAmount(value));
  };

  const handleIsConfirm = value => {
    dispatch(actionSetTransferIsConfirm(value));
  };

  const handleInputPin = value => {
    dispatch(actionSetTransferPin(value));
  };

  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <Header
        leftText={t(leftText)}
        leftIconProps={{
          name: leftIconName,
          size: 30,
          color: theme.color.white
        }}
        centerText={t(centerText)}
        onLeftPress={goBack}
      />
      <Body>
        <Container flex={6}>
          <Card
            {...state.card}
            step={state.step}
            amount={state.transfer.amount}
          />
          <DropdownSection visible={state.step === 1}>
            <Dropdown
              value={state.transfer.transferType}
              onValueChange={changeTransferType}
              items={state.transfer.types}
            />
          </DropdownSection>
          <InputSection visible={state.step === 1}>
            <CardInput
              requestCallback={handleInputCard}
              isDisabled={state.step > 1}
              initialValue={transfer.toCard}
            />
          </InputSection>
          <Withdrawal
            step={state.step}
            types={state.transfer.types}
            amount={transfer.amount}
            toCard={state.transfer.toCard}
            currency={state.card.currency}
            isConfirm={state.transfer.isConfirm}
            commission={state.transfer.commission}
            transferType={state.transfer.transferType}
            handleInputAmount={handleInputAmount}
            handleIsConfirm={handleIsConfirm}
          />
          <Pin requestCallback={handleInputPin} step={state.step} />
          <Success step={state.step} />
        </Container>
        <Container
          flex={state.step === 4 ? 1 : 4}
          style={{ paddingHorizontal: 15 }}
        >
          <Button
            rightIconProps={
              buttonRightIcon && {
                name: buttonRightIcon,
                size: 32,
                color: theme.color.iconDefault
              }
            }
            buttonLeftIcon={buttonLeftIcon}
            onPress={goNext}
            isDisabled={!isComplete}
          >
            {t(buttonText)}
          </Button>
        </Container>
      </Body>
      <Footer />
    </Wrapper>
  );
};
