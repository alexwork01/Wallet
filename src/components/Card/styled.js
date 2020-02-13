import styled from "styled-components/native";
import { Animated } from "react-native";
import { AnimatedHeight } from "../AnimatedHeight";
import { AnimatedFade } from "../AnimatedFade";

export const CardWrapper = styled(AnimatedHeight)`
  background: ${props => props.theme.color.blue};
`;

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 244;
  width: 80%;
`;

export const CardTitle = styled(AnimatedFade)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 244;
  width: 80%;
`;

export const CardText = styled.Text`
  color: ${props => props.theme.color.textSecondary};
  font-family: ${props =>
    props.fontLight ? props.theme.font.light : props.theme.font.regular};
  font-size: ${props => props.fontSize || 20};
`;

export const CardBody = styled(AnimatedFade)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 25;
  padding-top: 20;
  width: 100%;
`;

export const AnimatedContainer = styled(Animated.View)`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const CardBalance = styled.View`
  display: flex;
  flex-direction: row;
`;

export const CardStepContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20;
  padding-right: 20;
  width: 100%;
`;

export const CardStep = styled.View`
  background: ${props =>
    props.isActive
      ? props.theme.color.textSecondary
      : props.theme.color.borderSecondary};
  height: 3;
  width: 32;
`;

export const CardFooter = styled(AnimatedFade)`
  display: flex;
  flex-direction: row;
  height: 20;
  justify-content: center;
  width: 100%;
`;
