import React, { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Animated, Easing, Text } from "react-native";
import { CardMusk } from "./CardMusk";
import { CardStepper } from "./CardStepper";
import {
  CardBalance,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  CardWrapper,
  AnimatedContainer
} from "./styled";

const propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string,
  expDate: PropTypes.string.isRequired,
  lastDigits: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
};

export const Card = memo(props => {
  const { title, expDate, lastDigits, balance, currency, step, amount } = props;
  const { t } = useTranslation();

  const [integer, fractional] = balance.toFixed(2).split(".");
  const [amountInteger, amountFractional] = amount.split(".");

  const isFullType = step === 1;

  const [from, setFrom] = useState(202);
  const [to, setTo] = useState(202);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -10]
        })
      }
    ]
  };

  const moveAnimation = up => {
    Animated.timing(animatedValue, {
      toValue: up ? 1 : 0,
      duration: 500,
      easing: Easing.linear
    }).start();
  };

  useEffect(() => {
    if (step === 1) {
      setTo(202);
      moveAnimation(false);
    }
    if (step === 2) {
      setFrom(202);
      setTo(130);
      moveAnimation(true);
    }
    if (step === 3) {
      setFrom(130);
      setTo(70);
    }
    if (step === 4) {
      setFrom(70);
      setTo(0);
    }
  }, [moveAnimation, step]);

  return (
    <CardWrapper step={step} from={from} to={to}>
      <CardBody visible={step !== 4}>
        <CardTitle visible={isFullType} duration={600}>
          <CardText fontSize={20}>{title}</CardText>
          <CardText fontSize={20}>{expDate}</CardText>
        </CardTitle>
        <AnimatedContainer style={[animatedStyle]}>
          <CardBalance>
            <Text>
              {step !== 3 && (
                <CardText fontSize={34} fontLight>
                  &#8372;
                </CardText>
              )}
              <CardText fontSize={65} fontLight style={{ lineHeight: 80 }}>
                {`${step === 3 ? amountInteger : integer}.`}
              </CardText>
              <CardText fontSize={40} fontLight>
                {step === 3 && amountFractional ? amountFractional : fractional}
                {step === 3 && ` грн`}
              </CardText>
            </Text>
          </CardBalance>
          <CardMusk lastDigits={lastDigits} />
        </AnimatedContainer>
      </CardBody>
      <CardFooter visible={isFullType} duration={600}>
        <CardStepper stepsAmount={8} activeStep={3} />
      </CardFooter>
    </CardWrapper>
  );
});

Card.propTypes = propTypes;
